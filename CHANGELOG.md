# Changelog

## [1.6.27] - 2025-01-24

### Added

- Api `Affise.getReferrerOnServer`.
- Api `Affise.getReferrerOnServerValue`.

### Changed

- Update native Android to [`1.6.51`](https://github.com/affise/sdk-android/blob/v1.6.51/CHANGELOG.md).

## [1.6.26] - 2024-12-13

### Added

- New module `Huawei` for `AppGallery` install referrer.

### Changed

- Update native Android to [`1.6.50`](https://github.com/affise/sdk-android/blob/v1.6.50/CHANGELOG.md).

## [1.6.25] - 2024-11-26

### Added

- New module `RuStore`.

### Fixed

- Fix event writing to storage exception.

### Changed

- Update native Android to [`1.6.49`](https://github.com/affise/sdk-android/blob/v1.6.49/CHANGELOG.md).

## [1.6.24] - 2024-10-22

### Fixed

- Fix npm publish.

## [1.6.23] - 2024-10-22

### Changed

- Update native Android to [`1.6.47`](https://github.com/affise/sdk-android/blob/v1.6.47/CHANGELOG.md).

### Removed

- Api `setEnabledMetrics`.
- Api `setAutoCatchingTypes`.

## [1.6.22] - 2024-10-08

### Fixed

- Fix `Affise.module.getStatus` timing retry.

### Changed

- Update native iOS to [`1.6.42`](https://github.com/affise/sdk-ios/blob/1.6.42/CHANGELOG.md).
- Update native Android to [`1.6.45`](https://github.com/affise/sdk-android/blob/v1.6.45/CHANGELOG.md).

## [1.6.21] - 2024-10-02

### Added

- Module `Subscription` StoreKit2 support.

### Changed

- Update native iOS to [`1.6.41`](https://github.com/affise/sdk-ios/blob/1.6.41/CHANGELOG.md).

## [1.6.20] - 2024-09-11

### Added

- Module `Subscription` support.

### Changed

- Update native iOS to [`1.6.40`](https://github.com/affise/sdk-ios/blob/1.6.40/CHANGELOG.md).
- Update native Android to [`1.6.44`](https://github.com/affise/sdk-android/blob/v1.6.44/CHANGELOG.md).

## [1.6.19] - 2024-08-19

### Added

- iOS only api `Affise.ios.getReferrerOnServer`.
- iOS only api `Affise.ios.getReferrerOnServerValue`.

### Changed

- Api `Affise.getReferrer` to `Affise.getReferrerUrl`.
- Api `Affise.getReferrerValue` to `Affise.getReferrerUrlValue`.
- Update native iOS to [`1.6.39`](https://github.com/affise/sdk-ios/blob/1.6.39/CHANGELOG.md).
- Update native Android to [`1.6.42`](https://github.com/affise/sdk-android/blob/v1.6.42/CHANGELOG.md).

## [1.6.18] - 2024-07-31

### Added

- Modules compatibility check.

### Fixed

- Api `Affise.Module.getStatus`.

### Changed

- Update native iOS to [`1.6.36`](https://github.com/affise/sdk-ios/blob/1.6.36/CHANGELOG.md).
- Update native Android to [`1.6.40`](https://github.com/affise/sdk-android/blob/v1.6.40/CHANGELOG.md).

## [1.6.17] - 2024-07-11

### Added

- New module `Link` support.
- New module `AndroidId` support.

### Changed

- Update `registerDeeplinkCallback` change uri to convenient values.
- Update api `Affise.getStatus` moved to `Affise.module.getStatus`.
- Update api `Affise.moduleStart` moved to `Affise.module.moduleStart`.
- Update api `Affise.getModulesInstalled` moved to `Affise.module.getModulesInstalled`.

## [1.6.16] - 2024-07-03

### Fixed

- AGP error.
- Event timestamp field.

### Changed

- Update native iOS to [`1.6.33`](https://github.com/affise/sdk-ios/blob/1.6.33/CHANGELOG.md).
- Update native Android to [`1.6.38`](https://github.com/affise/sdk-android/blob/v1.6.38/CHANGELOG.md).

## [1.6.15] - 2024-06-04

### Added

- Event api `sendNow`.
- Affise `internal` library group callback support.

### Changed

- Update native iOS to [`1.6.32`](https://github.com/affise/sdk-ios/blob/1.6.32/CHANGELOG.md).
- Update native Android to [`1.6.34`](https://github.com/affise/sdk-android/blob/v1.6.34/CHANGELOG.md).

## [1.6.14] - 2024-03-13

### Added

- Api `isFirstRun`.

### Changed

- Update native iOS to `1.6.27`.
- Update native Android to `1.6.26`.

## [1.6.13] - 2024-02-06

### Changed

- Update native iOS to `1.6.25`.
- Update native Android to `1.6.23`.

## [1.6.12] - 2024-01-11

### Added

- Api `getModulesInstalled`.
- New values in enum `ReferrerKey`.

### Removed

- Event api `sendEvents`.

### Changed

- Update native iOS to `1.6.20`.
- Update native Android to `1.6.22`.

## [1.6.11] - 2023-12-19

### Removed

- Api `init`.

### Changed

- Api `Affise.android.getReferrer` to `Affise.getReferrer`
- Api `Affise.android.getReferrerValue` to  `Affise.getReferrerValue`

[1.6.27]: https://github.com/affise/sdk-react/compare/1.6.26...1.6.27
[1.6.26]: https://github.com/affise/sdk-react/compare/1.6.25...1.6.26
[1.6.25]: https://github.com/affise/sdk-react/compare/1.6.24...1.6.25
[1.6.24]: https://github.com/affise/sdk-react/compare/1.6.23...1.6.24
[1.6.23]: https://github.com/affise/sdk-react/compare/1.6.22...1.6.23
[1.6.22]: https://github.com/affise/sdk-react/compare/1.6.21...1.6.22
[1.6.21]: https://github.com/affise/sdk-react/compare/1.6.20...1.6.21
[1.6.20]: https://github.com/affise/sdk-react/compare/1.6.19...1.6.20
[1.6.19]: https://github.com/affise/sdk-react/compare/1.6.18...1.6.19
[1.6.18]: https://github.com/affise/sdk-react/compare/1.6.17...1.6.18
[1.6.17]: https://github.com/affise/sdk-react/compare/1.6.16...1.6.17
[1.6.16]: https://github.com/affise/sdk-react/compare/1.6.15...1.6.16
[1.6.15]: https://github.com/affise/sdk-react/compare/1.6.14...1.6.15
[1.6.14]: https://github.com/affise/sdk-react/compare/1.6.13...1.6.14
[1.6.13]: https://github.com/affise/sdk-react/compare/1.6.12...1.6.13
[1.6.12]: https://github.com/affise/sdk-react/compare/1.6.11...1.6.12
[1.6.11]: https://github.com/affise/sdk-react/compare/1.6.10...1.6.11
