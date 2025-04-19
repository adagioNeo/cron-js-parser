import CronHandler from "../abstracts";
import QuartzCronValues from "./types";

abstract class QuartzDeparser extends CronHandler {
  public abstract getCronObject(cronExpr: string): QuartzCronValues;
}

abstract class QuartzParser extends CronHandler {
  public abstract getExpression(cronObj: QuartzCronValues): string;
}

export {
  QuartzParser,
  QuartzDeparser
}