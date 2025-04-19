const { parseCronExpression, parseHumanReadable } = require('./cron-js-parser.quartz');

let obj = {
  seconds: {
    mode: 'at',
    value: [1, 5, 10]
  },
  minutes: {
    mode: 'startAtRepeatCycleEvery',
    value: {
      startAt: 1,
      every: 10
    }
  },
  hours: {
    mode:'startCycleInRange',
    value: {
      from: 2,
      to: 20
    }
  },
  days: {
    mode: 'cycle'
  },
  months: {
    mode: 'cycle'
  },
  years: {
    mode: 'at',
    value: [2020, 2022]
  },
  weekDays: {
    mode: 'on',
    value: {
      isLastWeek: false,
      dayIndex: 6,
      weekIndex: 3
    } 
  }
};
const cron = parseCronExpression(obj); 
console.log(cron);
lang = 'en' //French
console.log(parseHumanReadable(cron,{},lang))

