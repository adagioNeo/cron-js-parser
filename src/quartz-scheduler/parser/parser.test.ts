import {describe, expect, it } from '@jest/globals';
import { parseCronExpression } from './parser';

// describe('parseExpr', () => {
//   it('should generate expression for every second, minute, hour, day, month, weekday, and year', () => {
//     const cronValues = {
//       isEverySecond: true,
//       isEveryMinute: true,
//       isEveryHour: true,
//       isEveryDay: true,
//       isEveryMonth: true,
//       isEveryYear: true,
//     };
//     expect(parseCronExpression(cronValues)).toBe("* * * * * ? * ");
//   });
// // TODO: mode at to check for array length, if not >0 throw error

//   it('should generate expression for specific seconds, minutes, hours', () => {
//     const cronValues = {
//       atSeconds: [5, 10, 15],
//       atMins: [0, 30],
//       atHours: [1, 13],
//     };
//     expect(parseCronExpression(cronValues)).toBe("5,10,15 0,30 1,13 0 1 ? ");
//   });

//   it('should generate expression for second/minute/hour ranges', () => {
//     const cronValues = {
//       runEverySecondInRange: { from: 10, to: 20 },
//       runEveryMinuteInRange: { from: 5, to: 25 },
//       runEveryHourInRange: { from: 3, to: 15 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("10-20 5-25 3-15 0 1 ? ");
//   });

//   it('should handle every X seconds, minutes, hours', () => {
//     const cronValues = {
//       runEveryXSeconds: { startAt: 0, every: 5 },
//       runEveryXMins: { startAt: 0, every: 10 },
//       runEveryXHours: { startAt: 1, every: 2 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0/5 0/10 1/2 0 1 ? ");
//   });

//   it('should handle specific days, months, years', () => {
//     const cronValues = {
//       atDays: [1, 15],
//       atMonths: [6, 12],
//       atYears: [2023, 2024],
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 1,15 6,12 ? 2023,2024 ");
//   });

//   it('should handle day range and month range', () => {
//     const cronValues = {
//       runEveryDayInRange: { from: 1, to: 10 },
//       runEveryMonthInRange: { from: 2, to: 5 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 1-10 2-5 ? ");
//   });

//   it('should handle weekday as last week of the month', () => {
//     const cronValues = {
//       runOnWeekDay: { isLastWeek: true, dayIndex: 5 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 5L ");
//   });

//   it('should handle weekday with specific week index (e.g. second Monday)', () => {
//     const cronValues = {
//       runOnWeekDay: { isLastWeek: false, dayIndex: 1, weekIndex: 2 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 1#2 ");
//   });

//   it('should handle weekday range', () => {
//     const cronValues = {
//       runEveryWeekInRange: { from: "SUN", to: "THU" },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 SUN-THU");
//   });

//   it('should handle atWeekDays array', () => {
//     const cronValues = {
//       atWeekDays: ["SUN", "TUE", "THU"],
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 SUN,TUE,THU");
//   });

//   it('should handle runEveryXWeekDays', () => {
//     const cronValues = {
//       runEveryXWeekDays: { startAt: 1, every: 2 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 1/2 ");
//   });

//   it('should handle runEveryXYears', () => {
//     const cronValues = {
//       runEveryXYears: { startAt: 2020, every: 4 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 ? 2020/4 ");
//   });

//   it('should handle runEveryYearInRange', () => {
//     const cronValues = {
//       runEveryYearInRange: { from: 2020, to: 2030 },
//     };
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 ? 2020-2030 ");
//   });

//   it('should handle empty input (defaults)', () => {
//     const cronValues = {};
//     expect(parseCronExpression(cronValues)).toBe("0 0 0 ? 1 ? ");
//   });
// });
  