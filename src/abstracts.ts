import * as CronTypes from "./types/composites";

type IoSeconds = string | CronTypes.CronValues;
type IoMinutes = string | CronTypes.CronValues;
type IoHours = string | CronTypes.CronValues;
type IoDaysOfMonth = string | CronTypes.CronValues;
type IoDaysOfWeek = string | CronTypes.DaysOfWeekCronValues | undefined;
type IoMonths = string | CronTypes.CronValues;
type IoYears = string | CronTypes.CronValues | undefined;

export default abstract class CronHandler {
  protected abstract seconds(cronObj: IoSeconds): IoSeconds;
  protected abstract minutes(cronObj: IoMinutes): IoMinutes;
  protected abstract hours(cronObj: IoHours): IoHours;
  protected abstract daysOfMonth(cronObj: IoDaysOfMonth): IoDaysOfMonth;
  protected abstract months(cronObj: IoMonths): IoMonths;
  protected abstract daysOfWeek(cronObj: IoDaysOfWeek): IoDaysOfWeek;
  protected abstract years(cronObj: IoYears): IoYears;
}