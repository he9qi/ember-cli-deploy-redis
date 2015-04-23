var CoreObject = require('core-object');
var Promise    = require('ember-cli/lib/ext/promise');

module.exports = CoreObject.extend({
  init: function(options) {
    this._client = options.redisClient || require('then-redis').createClient(options);

    this._maxNumberOfRecentUploads = 10;
  },

  upload: function(/*key, tag, value*/) {
    var args = Array.prototype.slice.call(arguments);

    var key      = args.shift();
    var value    = args.pop();
    var tag      = args[0] || 'default';
    var redisKey = key + ':' + tag;

    var maxEntries = this._maxNumberOfRecentUploads;

    return Promise.resolve()
      .then(this._uploadIfKeyDoesNotExist.bind(this, redisKey, value))
      .then(this._updateRecentUploadsList.bind(this, key, tag))
      .then(this._trimRecentUploadsList.bind(this, key, maxEntries))
      .then(function() {
        return redisKey;
      });
  },

  _uploadIfKeyDoesNotExist: function(redisKey, value) {
    var client = this._client;

    return Promise.resolve()
      .then(function() {
        return client.get(redisKey);
      })
      .then(function(value) {
        if (value) {
          return Promise.reject('Value already exists for key: ' + redisKey);
        }
      })
      .then(function() {
        return client.set(redisKey, value);
      })
  },

  _updateRecentUploadsList: function(key, tag) {
    var client = this._client;
    return client.lpush(key, tag);
  },

  _trimRecentUploadsList: function(key, maxEntries) {
    var client = this._client;
    return client.ltrim(key, 0, maxEntries - 1);
  }
});