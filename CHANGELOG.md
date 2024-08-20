# Changelog

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

[1.6.19]: https://github.com/affise/sdk-react/compare/1.6.18...1.6.19
[1.6.18]: https://github.com/affise/sdk-react/compare/1.6.17...1.6.18
[1.6.17]: https://github.com/affise/sdk-react/compare/1.6.16...1.6.17
[1.6.16]: https://github.com/affise/sdk-react/compare/1.6.15...1.6.16
[1.6.15]: https://github.com/affise/sdk-react/compare/1.6.14...1.6.15
[1.6.14]: https://github.com/affise/sdk-react/compare/1.6.13...1.6.14
[1.6.13]: https://github.com/affise/sdk-react/compare/1.6.12...1.6.13
[1.6.12]: https://github.com/affise/sdk-react/compare/1.6.11...1.6.12
[1.6.11]: https://github.com/affise/sdk-react/compare/1.6.10...1.6.11
