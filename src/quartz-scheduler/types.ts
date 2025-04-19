import * as CronTypes from "../types/composites";

type QuartzCronObj = {
  seconds: CronTypes.CronValues,
  minutes: CronTypes.CronValues,
  hours: CronTypes.CronValues,
  days: CronTypes.CronValues,
  weekDays: CronTypes.WeekDaysCronValues,
  months: CronTypes.CronValues,
  years?: CronTypes.CronValues
}
export default QuartzCronObj;