
> Hey there! Would you take a quick second to ⭐️ star this [repo](https://github.com/adagioNeo/cron-js-parser)?

<img align="left" src="https://user-images.githubusercontent.com/759811/210273710-b13913e2-0a71-4d9d-94da-1fe538b8a73e.gif" width="120"/>

<br/>
<br/>

# [cron-js-parser](https://www.npmjs.com/package/cron-js-parser)

> 📢Support for <u>_Unix_</u> scheduler coming soon
## Contents
- [Introduction](#introduction)
- [Supported Schedulers](#supported-schedulers)
- [_JCON_ - Javascript Cron Object Notation](#jcon)
  - [Overview](#overview)
  - [Mode Object](#mode-object)
- [Quartz Scheduler](#quartz-scheduler)
  - [Methods Overview](#methods-overview)
    - [Parsers](#parsers)
    - [Deparser](#deparser)
  - [Example For Quartz](#example-for-quartz)
  - [Cron Trigger Standards](#cron-trigger-standards)
- [Support](#support)
- [Important Links](#important-links)

## Introduction
Cron expressions are powerful, but can be pretty confusing. The aim of this library is to standardize javascript logic for handling cron expressions. 

>✨ Introducing <u>**JCON**</u> - [*Javascript Cron Object Notation*](#jcon)

## Supported Schedulers
- [Quartz Scheduler](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) - Unix-based Java scheduler, referred to as Cron Trigger
## JCON
### Overview
> ℹ️ More on mode objects can be found [here](#mode-object)
```
{
  seconds: <Mode Object>,
  minutes: <Mode Object>
  hours: <Mode Object>,
  daysOfMonth?: <Mode Object>,
  months: <Mode Object>,
  daysOfWeek?: <Mode Object>,
  years?: <Mode Object>
}
```
> Mandatory Fields - **seconds, minutes, hours, months** </br>
> Optional Fields - **daysOfMonth, daysOfWeek, years**
### Mode Object
These constants define the allowed string literal values for the `mode` property in the respective types.
#### Types

##### 1. `Cycle`

Represents an object with a fixed mode indicating a cycle.
```
type Cycle = {
  mode: typeof cycle;
};
```
---

##### 2. `At`

Represents an object with a mode `'at'` and an array of numeric values.
```
type At = {
  mode: typeof at;
  value: number[];
};
```
---

##### 3. `StartAtRepeatCycleEvery`

Represents an object with a mode `'StartAtRepeatCycleEvery'` and a `StartAt` object as its value.
```
type StartAtRepeatCycleEvery = {
  mode: typeof startAtRepeatCycleEvery;
  value: StartAt;
};
```

---
##### 4. `StartCycleInRange`

Represents an object with a mode `'startCycleInRange'` and an `InRange` object as its value.
```
type StartCycleInRange = {
  mode: typeof startCycleInRange;
  value: InRange;
};
```
#### Summary
Type| Property | Type           | Description                  |
----| -------- | -------------- | ----------------------------|
cycle| `mode`   | `typeof cycle` | Must be the literal string `'cycle'` |
At| `mode`   | `typeof at`  | Must be the literal string `'at'` |
At| `value`  | `number[]`   | An array of numbers specifying values |
StartAtRepeatCycleEvery| `mode`   | `typeof startAtRepeatCycleEvery` | Must be the literal string `'startAtRepeatCycleEvery'` |
StartAtRepeatCycleEvery| `value`  | `StartAt`                   | An object containing `startAt` and `every` numbers |
StartCycleInRange| `mode`   | `typeof startCycleInRange`  | Must be the literal string `'startCycleInRange'` |
StartCycleInRange| `value`  | `InRange`                   | An object defining a range with `from` and `to` |

## [Quartz Scheduler](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)
### Methods Overview
#### Parsers
##### <u>parseCronExpression</u>
```
export const parseCronExpression = (cronValues: QuartzCronObj): string
```
###### Description
Converts a structured `QuartzCronObj` back into a cron expression string.

###### Input
- `cronValues` (`QuartzCronObj`): An object representing the components of a cron expression.

###### Output
- Returns a `string` representing the cron expression generated from the input object.

##### <u>parseHumanReadable</u>
```
export const parseHumanReadable = (
  cronExpr: string,
  cronValues: QuartzCronObj,
  language: string
): string
```
###### Description
Generates a human-readable description of a cron expression in the specified language.

###### Inputs
- `cronExpr` (`string`): The cron expression string. If empty or falsy, the function will generate the expression from `cronValues`.
- `cronValues` (`QuartzCronObj`): An object representing the cron expression components.
- `language` (`string`): The locale/language code (e.g., `'en'`, `'fr'`, `'de'`) to format the description.

###### Output
- Returns a `string` containing a verbose, human-readable description of the cron schedule in the specified language.
#### Deparser
##### <u>deparseCronExpression</u>
###### Description
Converts a cron expression string into a structured `QuartzCronObj` representation.

###### Input
- `cronExpr` (`string`): A valid cron expression string in Quartz format.

###### Output
- Returns a `QuartzCronObj` — an object representing the parsed components of the cron expression.

### [Example for Quartz](https://github.com/adagioNeo/cron-js-parser/tree/v1.1/test/index.js)
#### Input
```
let obj = {
  seconds: {
    mode: 'at',
    value: [1, 5, 10]
  },
  minutes: {
    mode: 'StartAtRepeatCycleEvery',
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
  daysOfWeek: {
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
lang = 'fr' //French
console.log(parseHumanReadable(cron,{},lang))
const deparsed = deparseCronExpression(cron)
console.log(deparsed)
console.log(parseCronExpression(deparsed))
```
#### Output
```
1,5,10 1/10 2-20 ? * ? 2020,2022
1, 5, et 10 secondes après la minute, toutes les 10 minutes, à partir de 1 minutes après l'heure, de 02:00 à 20:59, tous les jours, uniquement en 2020 et 2022
{
  seconds: { mode: 'at', value: [ 1, 5, 10 ] },
  minutes: { mode: 'StartAtRepeatCycleEvery', value: { startAt: 1, every: 10 } },
  hours: { mode: 'startCycleInRange', value: { from: 2, to: 20 } },
  daysOfMonth: undefined,
  months: { mode: 'cycle' },
  years: { mode: 'at', value: [ 2020, 2022 ] }
}
1,5,10 1/10 2-20 ? * ? 2020,2022
```
### Cron Trigger Standards
#### Days of Week
* 1 - **SUN** - Sunday
* 2 - **MON** - Monday
* 3 - **TUE** - Tuesday
* 4 - **WED** - Wednesday
* 5 - **THU** - Thursday
* 6 - **FRI** - Friday
* 7 - **SAT** - Saturday

## Support
* Javascript
* Typescript
* Nodejs
* Browser

## Important Links

* https://www.freeformatter.com/cron-expression-generator-quartz.html
