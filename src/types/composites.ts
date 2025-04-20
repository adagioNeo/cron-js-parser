import { onWeekDay } from "../constants";
import { Cycle, At, startAtRepeatCycleEvery, StartCycleInRange } from "./primitives";

type CronValues = Cycle|At|startAtRepeatCycleEvery|StartCycleInRange;
type DaysOfWeekCronValues = CronValues | {
  mode: typeof onWeekDay,
  value: {
    dayIndex:number,
    weekIndex?:number,
    isLastWeek:boolean
  }
}

export {
  CronValues,
  DaysOfWeekCronValues
};