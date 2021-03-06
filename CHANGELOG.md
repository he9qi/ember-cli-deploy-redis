## [0.4.1](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/tree/v0.4.1) (2016-07-25)
[Full Changelog](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/compare/v0.4.0...0.4.1)

- Use 'activationSuffix' in fetchRevision hooks [#61](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/61) [@zzarcon](https://github.com/zzarcon)

## [0.4.0](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/tree/v0.4.0) (2016-05-12)
[Full Changelog](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/compare/v0.3.0...0.4.0)

- Strip Heroku-style usernames from config url [#58](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/58) [@acorncom](https://github.com/acorncom)

## [0.3.0](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/tree/v0.3.0) (2016-04-01)
[Full Changelog](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/compare/v0.2.0...0.3.0)

This version adds support for caching the revision data which is collected by the new versions (>= 0.2.0) of the revision-data plugin and displayed by new versions (>= 0.2.0) of the display-revisions plugin.

- add support for caching revision data [\#56](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/56) ([ghedamat](https://github.com/ghedamat))

## [0.2.0](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/tree/v0.2.0) (2016-02-06)
[Full Changelog](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/compare/v0.1.1...0.2.0)

- add fetchInitialRevisions [\#50](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/50) ([ghedamat](https://github.com/ghedamat))
- update ember-cli-deploy-plugin to 0.2.1 [\#49](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/49) ([ghedamat](https://github.com/ghedamat))

## [0.1.1]

#### Community Contributions

- [#1](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/1) Deploy to Redis [@achambers](https://github.com/achambers)
- [#2](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/2) Now we're using user defined config over context [@achambers](https://github.com/achambers)
- [#3](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/3) Allow configuration of redis using a url property instead of host/port/etc [@lukemelia](https://github.com/lukemelia)
- [#4](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/4) Update description and repo in package.json [@lukemelia](https://github.com/lukemelia)
- [#5](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/5) Allow keyPrefix to be configurable. Defaults to "[project name]:index" [@lukemelia](https://github.com/lukemelia)
- [#6](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/6) Use new `configure` hook instead of `willDeploy` [@achambers](https://github.com/achambers)
- [#8](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/8) Implement `activate` hook [@achambers](https://github.com/achambers)
- [#9](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/9) Added didDeploy hook [@lukemelia](https://github.com/lukemelia)
- [#11](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/11) Plugin base class restructure [@achambers](https://github.com/achambers)
- [#12](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/12) Make filePattern relative to context.distDir [@achambers](https://github.com/achambers)
- [#13](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/13) Fixed a bug in activate hook logging [@lukemelia](https://github.com/lukemelia)
- [#14](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/14) Update README for v0.5.0 [@achambers](https://github.com/achambers)
- [#15](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/15) Make filePattern config relative to distDir [@achambers](https://github.com/achambers)
- [#16](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/16) Update ember-cli-deploy-plugin version for bugfix. [@lukemelia](https://github.com/lukemelia)
- [#17](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/17) Update for ember-cli-deploy CLI changes [@lukemelia](https://github.com/lukemelia)
- [#18](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/18) Read config from configured name path instead of static 'redis' key [@dschmidt](https://github.com/dschmidt)
- [#19](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/19) Pass through database number [@dschmidt](https://github.com/dschmidt)
- [#21](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/21) Very small typo [@zapnito](https://github.com/zapnito)
- [#22](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/22) Fixed typo [@zapnito](https://github.com/zapnito)
- [#32](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/32) store revision list in `keyPrefix:revisions` [@ghedamat](https://github.com/ghedamat)
- [#20](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/20) Specify allowOverwrite option in README [@zapnito](https://github.com/zapnito)
- [#39](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/39) Update to use new verbose option for logging [@ember-cli-deploy](https://github.com/ember-cli-deploy)
- [#24](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/24) use a sorted set to store the list of revisions [@ghedamat](https://github.com/ghedamat)
- [#23](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/23) add fetchRevisions to lib/redis and deployPlugin [@ghedamat](https://github.com/ghedamat)
- [#27](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/27) Reference revisionKey from new revisionData object [@achambers](https://github.com/achambers)
- [#29](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/29) Update repository [@achambers](https://github.com/achambers)
- [#30](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/30) Update repo url [@achambers](https://github.com/achambers)
- [#31](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/31) Minor Readme Updates [@nikz](https://github.com/nikz)
- [#38](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/38) use ssh-tunnel port if present [@ssendev](https://github.com/ssendev)
- [#41](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/41) Feature/activation suffix [@Bockit/feature](https://github.com/Bockit/feature)
- [#43](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/43) Add functionality to copy revision on activation. [@arenoir](https://github.com/arenoir)
- [#44](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/44) Fix Readme [@AW-UC](https://github.com/AW-UC)
- [#46](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/46) Add maxRecentUploads configuration option [@jrowlingson](https://github.com/jrowlingson)
- [#47](https://github.com/ember-cli-deploy/ember-cli-deploy-redis/pull/47) set previousRevisionKey before activating a new revision [@duizendnegen/feature](https://github.com/duizendnegen/feature)

Thank you to all who took the time to contribute!
