import * as CronTypes from "../types/composites";

type QuartzCronObj = {
  seconds: CronTypes.CronValues,
  minutes: CronTypes.CronValues,
  hours: CronTypes.CronValues,
  daysOfMonth: CronTypes.CronValues,
  months: CronTypes.CronValues,
  daysOfWeek?: CronTypes.DaysOfWeekCronValues,
  years?: CronTypes.CronValues
}
export default QuartzCronObj;