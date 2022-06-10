# cron-js-parser
***cron-js-parser*** is a library that parses a cron expression and outputs a human readable description of the cron schedule. For example, given the expression "*/5 * * * *" it will output "Every 5 minutes".


http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html
https://www.freeformatter.com/cron-expression-generator-quartz.html

## Options
isEverySecond?: boolean,
  isEveryMinute?: boolean,
  isEveryHour?: boolean,
  isEveryDay?: boolean,
  isEveryMonth?: boolean,
  isEveryYear?: boolean,
  atSeconds?: [],
  atMins?: [],
  atHours?: [],
  atDays?: [],
  atMonths?: [],
  atWeekDays?:[],
  atYears?: [],
  runEveryXSeconds?: {
    startAt: number,
    every: number
  },
  runEveryXMins?: {
    startAt: number,
    every: number
  },
  runEveryXHours?: {
    startAt: number,
    every: number
  },
  runEveryXDays?: {
    startAt: number,
    every: number
  },
  runEveryXMonths?: {
    startAt: number,
    every: number
  },
  runEveryXWeekDays?: {
    startAt: number,
    every: number
  },
  runEveryXYears?: {
    startAt: number,
    every: number
  },
  runEverySecondInRange: {
    from: number,
    to: number
  },
  runEveryMinuteInRange: {
    from: number,
    to: number
  },
  runEveryHourInRange: {
    from: number,
    to: number
  },
  runEveryDayInRange: {
    from: number,
    to: number
  },
  runEveryMonthInRange: {
    from: number,
    to: number
  },
  runEveryWeekInRange: {
    from: string,
    to: string
  },
  runEveryYearInRange: {
    from: number,
    to: number
  }


atWeekDays implies every week

1 - SUN - Sunday
2 - MON - Monday
3 - TUE - Tuesday
4 - WED - Wednesday
5 - THU - Thursday
6 - FRI - Friday
7 - SAT - Saturday


runEveryWeekInRange - MON
## *Exceptions not handled*

Days of Month and Days of Week are not supported by Quartz Scheduler, even thought this expression can be generated by **parseExpression** (which we will remove support in future release), it won't be a valid expression.