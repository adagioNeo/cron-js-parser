import cronstrueWithLocales from 'cronstrue/i18n';
import * as CronTypes from '../../types/composites';
import { QuartzParser } from '../abstracts';
import QuartzCronObj from '../types';
import {
  cycle, at, startAtRepeatCycleEvery, startCycleInRange, onWeekDay
} from '../../constants';

// TODO: mode at to check for array length, if not >0 throw error
class Parser extends QuartzParser {
  public getExpression(cronObj: QuartzCronObj): string {
    let expr = "";
    expr+=this.seconds(cronObj.seconds);
    expr+=this.minutes(cronObj.minutes);
    expr+=this.hours(cronObj.hours);
    expr+=this.days(cronObj.days);
    expr+=this.months(cronObj.months);
    expr+=this.weekDays(cronObj.weekDays);
    expr+=cronObj.years !== undefined ? this.years(cronObj.years) : "";
    return expr;
  }
  private commonLogic(cronObj: CronTypes.CronValues): string {
    let expr = "";
    if (cronObj.mode === cycle) {
      expr = "* ";
    } else if (cronObj.mode === startAtRepeatCycleEvery) {
      expr = `${cronObj.value.startAt}/${cronObj.value.every} `;
    } else if (cronObj.mode === startCycleInRange) {
      expr = `${cronObj.value.from}-${cronObj.value.to} `;
    } else if (cronObj.mode === at) {
      if(cronObj.value.length > 0){
        expr = `${cronObj.value.toString()} `;
      } else {
        throw new Error("Specified mode is missing values");
      }
    } else {
      expr = "0 ";
    }
    return expr;
  }
  protected seconds(cronObj: CronTypes.CronValues): string {
    return this.commonLogic(cronObj);
  }
  protected minutes(cronObj: CronTypes.CronValues): string {
    return this.commonLogic(cronObj);
  }
  protected hours(cronObj: CronTypes.CronValues): string {
    return this.commonLogic(cronObj);
  }
  protected days(cronObj: CronTypes.CronValues): string {
    return this.commonLogic(cronObj);
  }
  protected months(cronObj: CronTypes.CronValues): string {
    return this.commonLogic(cronObj);
  }
  protected weekDays(cronObj: CronTypes.WeekDaysCronValues): string {
    let expr = "";
    if (cronObj.mode === startAtRepeatCycleEvery){
      expr = `${cronObj.value.startAt}/${cronObj.value.every} `;
    } else if(cronObj.mode === onWeekDay){
      if(cronObj.value.isLastWeek){
        expr=cronObj.value.dayIndex+"L "
      } else{
        expr=cronObj.value.dayIndex+"#"+cronObj.value.weekIndex+" "
      }
    } else if(cronObj.mode === startCycleInRange){
      expr = `${cronObj.value.from}-${cronObj.value.to} `;
    } else if(cronObj.mode === at){
      if(cronObj.value.length > 0){
        expr = `${cronObj.value.toString()} `;
      } else {
        throw new Error("Specified mode is missing values");
      }    
    } else{
      expr="? ";
    }
    return expr;
  }
  protected years(cronObj: CronTypes.CronValues): string {
    return this.commonLogic(cronObj);
  }
}

const parseHumanReadable = (
  cronExpr: string, cronValues: QuartzCronObj, language: string
): string => {
  let expr = cronExpr;
  if (!cronExpr) {
    const parser = new Parser();
    expr = parser.getExpression(cronValues);
  }
  return cronstrueWithLocales.toString(expr, {
    verbose: true,
    locale: language
  });
}

const parseCronExpression = (cronValues: QuartzCronObj): string => {
  const parser = new Parser();
  return parser.getExpression(cronValues);
}

export {
  parseCronExpression,
  parseHumanReadable
}