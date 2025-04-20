import { CronValues, WeekDaysCronValues } from "../../types/composites";
import { QuartzDeparser } from "../abstracts";
import QuartzCronObj from "../types";
import {
  cycle, at, startAtRepeatCycleEvery, startCycleInRange, onWeekDay
} from '../../constants';

class Deparser extends QuartzDeparser {
  public getCronObject(cronExpr: string): QuartzCronObj {
    const expressions = cronExpr.split(' ');
    const cronObj: QuartzCronObj = {
      seconds: this.seconds(expressions[0]),
      minutes: this.minutes(expressions[1]),
      hours: this.hours(expressions[2]),
      days: this.days(expressions[3]),
      months: this.months(expressions[4]),
    };
    const weekDays = this.weekDays(expressions[5]);
    if(weekDays) {
      cronObj['weekDays'] = weekDays; 
    }
    if(this.hasYearConfig(expressions)) {
      cronObj['years'] = this.years(expressions[6])
    }
    return cronObj;
  }
  protected seconds(cronObj: string): CronValues {
    return this.commonLogic(cronObj);
  }
  protected minutes(cronObj: string): CronValues {
    return this.commonLogic(cronObj);
  }
  protected hours(cronObj: string): CronValues {
    return this.commonLogic(cronObj);
  }
  protected days(cronObj: string): CronValues {
    return this.commonLogic(cronObj);
  }
  protected months(cronObj: string): CronValues {
    return this.commonLogic(cronObj);
  }
  protected weekDays(cronObj: string): WeekDaysCronValues | undefined {
    const trimmed = cronObj.trim();
    if (/^\d+\/\d+$/.test(trimmed)) {
      const [startAtStr, everyStr] = trimmed.split('/');
      return {
        mode: startAtRepeatCycleEvery,
        value: {
          startAt: parseInt(startAtStr, 10),
          every: parseInt(everyStr, 10),
        },
      };
    }
    if (/^\d+L$/.test(trimmed)) {
      const dayIndex = parseInt(trimmed.replace('L', ''), 10);
      return {
        mode: onWeekDay,
        value: {
          dayIndex,
          isLastWeek: true,
        },
      };
    }
    if (/^\d+#\d+$/.test(trimmed)) {
      const [dayIndexStr, weekIndexStr] = trimmed.split('#');
      return {
        mode: onWeekDay,
        value: {
          dayIndex: parseInt(dayIndexStr, 10),
          weekIndex: parseInt(weekIndexStr, 10),
          isLastWeek: false,
        },
      };
    }
    if (/^\d+-\d+$/.test(trimmed)) {
      const [fromStr, toStr] = trimmed.split('-');
      return {
        mode: startCycleInRange,
        value: {
          from: fromStr,
          to: toStr,
        },
      };
    }
    if (/^\d+(,\d+)*$/.test(trimmed)) {
      const values = trimmed.split(',').map(Number);
      return {
        mode: at,
        value: values,
      };
    }
    if(trimmed==="?") {
      return undefined
    }
  }
  protected years(cronObj: string): CronValues {
    return this.commonLogic(cronObj);
  }
  private hasYearConfig(exprs: string[]): boolean {
    if ((exprs.length - 1) > 5) { 
      return true;
    };
    return false;
  }
  private commonLogic(expr: string): CronValues {
    const trimmed = expr.trim();
    if (trimmed === '*') {
      return { mode: cycle };
    }
    if (trimmed.includes('/') && !trimmed.includes(',')) {
      const [startAtStr, everyStr] = trimmed.split('/');
      const startAt = parseInt(startAtStr, 10);
      const every = parseInt(everyStr, 10);
  
      if (!isNaN(startAt) && !isNaN(every)) {
        return {
          mode: startAtRepeatCycleEvery,
          value: { startAt, every }
        };
      }
    }
    if (trimmed.includes('-') && !trimmed.includes(',')) {
      const [fromStr, toStr] = trimmed.split('-');
      const from = parseInt(fromStr, 10);
      const to = parseInt(toStr, 10);
  
      if (!isNaN(from) && !isNaN(to)) {
        return {
          mode: startCycleInRange,
          value: { from, to }
        };
      }
    }
    if (trimmed.includes(',')) {
      const values = trimmed.split(',').map((v) => parseInt(v, 10));
      if (values.every((v) => !isNaN(v))) {
        return {
          mode: at,
          value: values
        };
      }
    }
    if (!isNaN(parseInt(trimmed, 10))) {
      return {
        mode: at,
        value: [parseInt(trimmed, 10)]
      };
    }
    throw new Error('Invalid cron expression format');
  }
}

const deparseCronExpression = (cronExpr: string): QuartzCronObj => {
  const deparser = new Deparser();
  return deparser.getCronObject(cronExpr);
}

export { deparseCronExpression }