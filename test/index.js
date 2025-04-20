const { 
  parseCronExpression, parseHumanReadable, deparseCronExpression
} = require('./cron-js-parser.quartz');
console.log(deparseCronExpression("1,5,10 10/10 2-20 * 1 ? 2020,2022"))

console.log(parseCronExpression)
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
  daysOfMonth: {
    mode: 'cycle'
  },
  months: {
    mode: 'cycle'
  },
  years: {
    mode: 'at',
    value: [2020, 2022]
  },
  // daysOfWeek: {
  //   mode: 'on',
  //   value: {
  //     isLastWeek: false,
  //     dayIndex: 6,
  //     weekIndex: 3
  //   } 
  // }
};
const cron = parseCronExpression(obj); 
console.log(cron);
lang = 'en' //French
console.log(parseHumanReadable(cron,{},lang))
console.log(deparseCronExpression(cron))
