# Changelog

## [1.1] - 2025-04-20
> [!CAUTION]
> Breaking changes
### Added
- Deparser ([Quartz Scheduler](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) supported)
### Changed
- Parser input format (Check latest [README.md](https://github.com/adagioNeo/cron-js-parser/blob/main/README.md))
- Explicit support for Quartz Scheduler (Upcoming support for Unix Scheduler)
### Fixed
- Removed unnecessary mandate for [runOnWeekDay](https://github.com/adagioNeo/cron-js-parser/issues/8)
## [1.0.18] - 2024-07-16
### Fixed
- Upgraded Construe version to 2.50.0

## [1.0.17] - 2022-06-11
### Added
- Parser - Initial release with `parseCronExpression`
