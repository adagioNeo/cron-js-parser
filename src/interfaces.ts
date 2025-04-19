export interface CronValues {
  isEverySecond?: boolean,
  atSeconds?: number[],
  runEveryXSeconds?: {
    startAt: number,
    every: number
  },
  runEverySecondInRange?: {
    from: number,
    to: number
  },
  isEveryMinute?: boolean,
  atMins?: number[],
  runEveryXMins?: {
    startAt: number,
    every: number
  },
  runEveryMinuteInRange?: {
    from: number,
    to: number
  },
  isEveryHour?: boolean,
  atHours?: number[],
  runEveryXHours?: {
    startAt: number,
    every: number
  },
  runEveryHourInRange?: {
    from: number,
    to: number
  },
  isEveryDay?: boolean,
  atDays?: number[],
  runEveryXDays?: {
    startAt: number,
    every: number
  },
  runEveryDayInRange?: {
    from: number,
    to: number
  },
  atWeekDays?: string[],
  runEveryXWeekDays?: {
    startAt: number,
    every: number
  },
  runOnWeekDay?:{
    dayIndex:number,
    weekIndex?:number,
    isLastWeek:boolean
  },
  runEveryWeekInRange?: {
    from: string,
    to: string
  },
  isEveryMonth?: boolean,
  atMonths?: number[],
  runEveryXMonths?: {
    startAt: number,
    every: number
  },
  runEveryMonthInRange?: {
    from: number,
    to: number
  },
  isEveryYear?: boolean,
  atYears?: number[],
  runEveryXYears?: {
    startAt: number,
    every: number
  },
  runEveryYearInRange?: {
    from: number,
    to: number
  },
}