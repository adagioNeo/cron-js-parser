import {
  cycle, at, startAtRepeatCycleEvery, startCycleInRange
} from "../constants";

type StartAt = {
  startAt: number,
  every: number
};
type InRange = {
  from: number | string,
  to: number | string
};
type Cycle = {
  mode: typeof cycle
};
type At = {
  mode: typeof at,
  value: number[]
};
type startAtRepeatCycleEvery = {
  mode: typeof startAtRepeatCycleEvery,
  value: StartAt
};
type StartCycleInRange = {
  mode: typeof startCycleInRange,
  value: InRange
};

export {
  Cycle, At, startAtRepeatCycleEvery, StartCycleInRange
};