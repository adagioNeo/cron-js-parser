import { onWeekDay } from "../constants/logical";
import { Cycle, At, StartAtRepeatCycleEvery, StartCycleInRange } from "./primitives";

type CronValues = Cycle|At|StartAtRepeatCycleEvery|StartCycleInRange;
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