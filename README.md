# cron-js-parser
Library that provides two methods which help in UI and Backend based parsing for parses of cron expression. Following **methods** are found to be most common use cases, also culprits which bloat the code : 
1. ***parseHumanReadable***:

    Outputs a human readable description of the cron schedule from a cron expression or cron values. For example, given the expression "*/5 * * * *" it will output "Every 5 minutes". 

    **Example :**
    ```
    let language = 'en' //english
    let obj = {
      atSeconds: [1, 5, 10],
      runEveryXMins: {
          startAt: 10,
          every: 10
      },
      runEveryHourInRange: {
          from: 2,
          to: 20
      },
      isEveryDay: true,
      atYears: [2020, 2022]
    };
    console.log(parseHumanReadable("",obj,lang))
    lang = 'fr' //French
    console.log(parseHumanReadable("",obj,lang))

    Output : 
    At 1, 5, and 10 seconds past the minute, every 10 minutes, starting at 10 minutes past the hour, between 02:00 AM and 08:59 PM, every day

    1, 5, et 10 secondes après la minute, toutes les 10 minutes, départ 10 minutes après l'heure, de 02:00 AM à 08:59 PM, tous les jours
    ```

2. ***parseCronExpression***:
  Outputs a cron expression from a set of values (Look below for **Options** section to understand all the possible values). 
    **Example :**
    ```
    let obj = {
      atSeconds: [1, 5, 10],
      runEveryXMins: {
          startAt: 10,
          every: 10
      },
      runEveryHourInRange: {
          from: 2,
          to: 20
      },
      isEveryDay: true,
      atYears: [2020, 2022]
    };
    console.log(parseCronExpression(obj))

    Output : 
    1,5,10 10/10 2-20 * * ?
    ```

## Support
* Quartz Scheduler
* Javascript
* Typescript
* Nodejs
* Browser

## Options (keys and expected values' type)
```
isEverySecond?: boolean
isEveryMinute?: boolean
isEveryHour?: boolean
isEveryDay?: boolean
isEveryMonth?: boolean
isEveryYear?: boolean
atSeconds?: []
atMins?: []
atHours?: []
atDays?: []
atMonths?: [],
atWeekDays?:[],
atYears?: [],
runEveryXSeconds?: {
  startAt: number,
  every: number
},
runEveryXMins?: {
  startAt: number,
  every: number
},
runEveryXHours?: {
  startAt: number,
  every: number
},
runEveryXDays?: {
  startAt: number,
  every: number
},
runEveryXMonths?: {
  startAt: number,
  every: number
},
runEveryXWeekDays?: {
  startAt: number,
  every: number
},
runEveryXYears?: {
  startAt: number,
  every: number
},
runEverySecondInRange: {
  from: number,
  to: number
},
runEveryMinuteInRange: {
  from: number,
  to: number
},
runEveryHourInRange: {
  from: number,
  to: number
},
runEveryDayInRange: {
  from: number,
  to: number
},
runEveryMonthInRange: {
  from: number,
  to: number
},
runEveryWeekInRange: {
  from: string,
  to: string
},
runEveryYearInRange: {
  from: number,
  to: number
}
```
***atWeekDays implies every week***

## *Things to keep in mind*

* Values that need to be set are different for **runEveryXWeekDays** && **runEveryWeekInRange** (See section below *Values to understand*) 
```
runEveryXWeekDays = {
  startAt:1,
  every:2
} //implies => start on Sunday and every 2 days

runEveryWeekInRange = {
  from:'MON',
  to:'THU'
} //implies => start from Monday till Thursday
```
## Values to understand
* 1 - **SUN** - Sunday
* 2 - **MON** - Monday
* 3 - **TUE** - Tuesday
* 4 - **WED** - Wednesday
* 5 - **THU** - Thursday
* 6 - **FRI** - Friday
* 7 - **SAT** - Saturday
## Important Links to refer for Quartz Scheduler

* https://github.com/bradymholt/cronstrue
* http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html 
* https://www.freeformatter.com/cron-expression-generator-quartz.html
