import * as CronTypes from "./types/composites";

type IoSeconds = string | CronTypes.CronValues;
type IoMinutes = string | CronTypes.CronValues;
type IoHours = string | CronTypes.CronValues;
type IoDays = string | CronTypes.CronValues;
type IoWeekDays = string | CronTypes.WeekDaysCronValues;
type IoMonths = string | CronTypes.CronValues;
type IoYears = string | CronTypes.CronValues;

export default abstract class CronHandler {
  protected abstract seconds(cronObj: IoSeconds): IoSeconds;
  protected abstract minutes(cronObj: IoMinutes): IoMinutes;
  protected abstract hours(cronObj: IoHours): IoHours;
  protected abstract days(cronObj: IoDays): IoDays;
  protected abstract months(cronObj: IoMonths): IoMonths;
  protected abstract weekDays(cronObj: IoWeekDays): IoWeekDays;
  protected abstract years(cronObj: IoYears): IoYears;
}