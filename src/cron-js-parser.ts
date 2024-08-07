import cronstrueWithLocales from 'cronstrue/i18n';
interface CronValues {
  isEverySecond?: boolean,
  isEveryMinute?: boolean,
  isEveryHour?: boolean,
  isEveryDay?: boolean,
  isEveryMonth?: boolean,
  isEveryYear?: boolean,
  atSeconds?: number[],
  atMins?: number[],
  atHours?: number[],
  atDays?: number[],
  atMonths?: number[],
  atWeekDays?: string[],
  atYears?: number[],
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
  runEverySecondInRange?: {
    from: number,
    to: number
  },
  runEveryMinuteInRange?: {
    from: number,
    to: number
  },
  runEveryHourInRange?: {
    from: number,
    to: number
  },
  runEveryDayInRange?: {
    from: number,
    to: number
  },
  runEveryMonthInRange?: {
    from: number,
    to: number
  },
  runEveryWeekInRange?: {
    from: string,
    to: string
  },
  runEveryYearInRange?: {
    from: number,
    to: number
  },
  runOnWeekDay:{
    dayIndex:number,
    weekIndex?:number,
    isLastWeek:boolean
  }
}
export const parseHumanReadable = (
  cronExpr: string,
  cronValues: CronValues,
  language: string): string => {
  let expr = cronExpr;
  if (!cronExpr) {
    expr = parseExpr(cronValues);
  }
  return cronstrueWithLocales.toString(expr, {
    verbose: true,
    locale: language
  });
}

export const parseCronExpression = (
  cronValues: CronValues): string => {
  return parseExpr(cronValues);
}

function parseExpr(cronValues: any) {
  let expr = "";
  if (cronValues.isEverySecond) {
    expr = "* ";
  } else if (cronValues.runEveryXSeconds) {
    expr = cronValues.runEveryXSeconds.startAt + "/" + cronValues.runEveryXSeconds.every + " ";
  } else if (cronValues.runEverySecondInRange) {
    expr = cronValues.runEverySecondInRange.from + "-" + cronValues.runEverySecondInRange.to + " ";
  } else if (cronValues.atSeconds?.length > 0) {
    expr = cronValues.atSeconds?.toString() + " ";
  } else {
    expr = "0 ";
  }

  if (cronValues.isEveryMinute) {
    expr = expr + "* ";
  } else if (cronValues.runEveryXMins) {
    expr = expr + cronValues.runEveryXMins.startAt + "/" + cronValues.runEveryXMins.every + " ";
  } else if (cronValues.runEveryMinuteInRange) {
    expr = expr + cronValues.runEveryMinuteInRange.from + "-" + cronValues.runEveryMinuteInRange.to + " ";
  } else if (cronValues.atMins?.length > 0) {
    expr = expr + cronValues.atMins?.toString() + " ";
  } else {
    expr = expr + "0 ";
  }

  if (cronValues.isEveryHour) {
    expr = expr + "* ";
  } else if (cronValues.runEveryXHours) {
    expr = expr + cronValues.runEveryXHours.startAt + "/" + cronValues.runEveryXHours.every + " ";
  } else if (cronValues.runEveryHourInRange) {
    expr = expr + cronValues.runEveryHourInRange.from + "-" + cronValues.runEveryHourInRange.to + " ";
  } else if (cronValues.atHours?.length > 0) {
    expr = expr + cronValues.atHours?.toString() + " ";
  } else {
    expr = expr + "0 ";
  }

  if (cronValues.isEveryDay) {
    expr = expr + "* ";
  } else if (cronValues.runEveryXDays) {
    expr = expr + cronValues.runEveryXDays.startAt + "/" + cronValues.runEveryXDays.every + " ";
  } else if (cronValues.runEveryDayInRange) {
    expr = expr + cronValues.runEveryDayInRange.from + "-" + cronValues.runEveryDayInRange.to + " ";
  } else if (cronValues.atDays?.length > 0) {
    expr = expr + cronValues.atDays?.toString() + " ";
  } else {
    expr = expr + "? ";
  }

  if (cronValues.isEveryMonth) {
    expr = expr + "* ";
  } else if (cronValues.runEveryXMonths) {
    expr = expr + cronValues.runEveryXMonths.startAt + "/" + cronValues.runEveryXMonths.every + " ";
  } else if (cronValues.runEveryMonthInRange) {
    expr = expr + cronValues.runEveryMonthInRange.from + "-" + cronValues.runEveryMonthInRange.to + " ";
  } else if (cronValues.atMonths?.length > 0) {
    expr = expr + cronValues.atMonths?.toString() + " ";
  } else {
    expr = expr + "1 ";
  }

  if(cronValues.runEveryXWeekDays){
    expr=expr+cronValues.runEveryXWeekDays.startAt+"/"+cronValues.runEveryXWeekDays.every+" "
  } else if(cronValues.runOnWeekDay){
    if(cronValues.runOnWeekDay.isLastWeek){
      expr=expr+cronValues.runOnWeekDay.dayIndex+"L "
    } else{
      expr=expr+cronValues.runOnWeekDay.dayIndex+"#"+cronValues.runOnWeekDay.weekIndex+" "
    }
  } else if(cronValues.runEveryWeekInRange){
    expr=expr+cronValues.runEveryWeekInRange.from+"-"+cronValues.runEveryWeekInRange.to+" "
  } else if(cronValues.atWeekDays?.length>0){
    expr=expr+cronValues.atWeekDays.toString()+" ";
  } else{
    expr=expr+"? ";
  }

  if (cronValues.isEveryYear) {
    expr = expr + "* ";
  } else if (cronValues.runEveryXYears) {
    expr = expr + cronValues.runEveryXYears.startAt + "/" + cronValues.runEveryXYears.every + " ";
  } else if (cronValues.runEveryYearInRange) {
    expr = expr + cronValues.runEveryYearInRange.from + "-" + cronValues.runEveryYearInRange.to + " ";
  } else if (cronValues.atYears?.length > 0) {
    expr = expr + cronValues.atYears?.toString() + " ";
  }
  return expr;
}
