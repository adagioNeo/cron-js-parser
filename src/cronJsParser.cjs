"use strict";
exports.__esModule = true;
exports.parseCronExpression = exports.parseHumanReadable = void 0;
var Cronstrue = require("cronstrue/i18n");
var parseHumanReadable = function (cronExpr, cronValues, language) {
    var expr = cronExpr;
    if (!cronExpr) {
        expr = parseExpr(cronValues);
    }
    return Cronstrue["default"].toString(expr, {
        verbose: true,
        locale: language
    });
};
exports.parseHumanReadable = parseHumanReadable;
var parseCronExpression = function (cronValues) {
    return parseExpr(cronValues);
};
exports.parseCronExpression = parseCronExpression;
function parseExpr(cronValues) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var expr = "";
    if (cronValues.isEverySecond) {
        expr = "* ";
    }
    else if (cronValues.runEveryXSeconds) {
        expr = cronValues.runEveryXSeconds.startAt + "/" + cronValues.runEveryXSeconds.every + " ";
    }
    else if (cronValues.runEverySecondInRange) {
        expr = cronValues.runEverySecondInRange.from + "-" + cronValues.runEverySecondInRange.to + " ";
    }
    else if (((_a = cronValues.atSeconds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        expr = ((_b = cronValues.atSeconds) === null || _b === void 0 ? void 0 : _b.toString()) + " ";
    }
    else {
        expr = "0 ";
    }
    if (cronValues.isEveryMinute) {
        expr = expr + "* ";
    }
    else if (cronValues.runEveryXMins) {
        expr = expr + cronValues.runEveryXMins.startAt + "/" + cronValues.runEveryXMins.every + " ";
    }
    else if (cronValues.runEveryMinuteInRange) {
        expr = expr + cronValues.runEveryMinuteInRange.from + "-" + cronValues.runEveryMinuteInRange.to + " ";
    }
    else if (((_c = cronValues.atMins) === null || _c === void 0 ? void 0 : _c.length) > 0) {
        expr = expr + ((_d = cronValues.atMins) === null || _d === void 0 ? void 0 : _d.toString()) + " ";
    }
    else {
        expr = expr + "0 ";
    }
    if (cronValues.isEveryHour) {
        expr = expr + "* ";
    }
    else if (cronValues.runEveryXHours) {
        expr = expr + cronValues.runEveryXHours.startAt + "/" + cronValues.runEveryXHours.every + " ";
    }
    else if (cronValues.runEveryHourInRange) {
        expr = expr + cronValues.runEveryHourInRange.from + "-" + cronValues.runEveryHourInRange.to + " ";
    }
    else if (((_e = cronValues.atHours) === null || _e === void 0 ? void 0 : _e.length) > 0) {
        expr = expr + ((_f = cronValues.atHours) === null || _f === void 0 ? void 0 : _f.toString()) + " ";
    }
    else {
        expr = expr + "0 ";
    }
    if (cronValues.isEveryDay) {
        if (((_g = cronValues.atWeekDays) === null || _g === void 0 ? void 0 : _g.length) > 0) {
            expr = expr + "? ";
        }
        else {
            expr = expr + "* ";
        }
    }
    else if (cronValues.runEveryXDays) {
        expr = expr + cronValues.runEveryXDays.startAt + "/" + cronValues.runEveryXDays.every + " ";
    }
    else if (cronValues.runEveryDayInRange) {
        expr = expr + cronValues.runEveryDayInRange.from + "-" + cronValues.runEveryDayInRange.to + " ";
    }
    else if (((_h = cronValues.atDays) === null || _h === void 0 ? void 0 : _h.length) > 0) {
        expr = expr + ((_j = cronValues.atDays) === null || _j === void 0 ? void 0 : _j.toString()) + " ";
    }
    else {
        expr = expr + "0 ";
    }
    if (cronValues.isEveryMonth) {
        expr = expr + "* ";
    }
    else if (cronValues.runEveryXMonths) {
        expr = expr + cronValues.runEveryXMonths.startAt + "/" + cronValues.runEveryXMonths.every + " ";
    }
    else if (cronValues.runEveryMonthInRange) {
        expr = expr + cronValues.runEveryMonthInRange.from + "-" + cronValues.runEveryMonthInRange.to + " ";
    }
    else if (((_k = cronValues.atMonths) === null || _k === void 0 ? void 0 : _k.length) > 0) {
        expr = expr + ((_l = cronValues.atDays) === null || _l === void 0 ? void 0 : _l.toString()) + " ";
    }
    else {
        expr = expr + "* ";
    }
    if (cronValues.runEveryXWeekDays) {
        expr = expr + cronValues.runEveryXWeekDays.startAt + "/" + cronValues.runEveryXWeekDays.every + " ";
    }
    else if (cronValues.runEveryWeekInRange) {
        expr = expr + cronValues.runEveryWeekInRange.from + "-" + cronValues.runEveryWeekInRange.to + " ";
    }
    else if (((_m = cronValues.atWeekDays) === null || _m === void 0 ? void 0 : _m.length) > 0) {
        expr = expr + cronValues.atWeekDays.toString() + " ";
    }
    else {
        expr = expr + "? ";
    }
    if (cronValues.isEveryYear) {
        expr = expr + "* ";
    }
    else if (cronValues.runEveryXYears) {
        expr = expr + cronValues.runEveryXYears.startAt + "/" + cronValues.runEveryXYears.every + " ";
    }
    else if (cronValues.runEveryYearInRange) {
        expr = expr + cronValues.runEveryYearInRange.from + "-" + cronValues.runEveryYearInRange.to + " ";
    }
    else if (((_o = cronValues.atYears) === null || _o === void 0 ? void 0 : _o.length) === 0) {
        expr = expr + ((_p = cronValues.atYears) === null || _p === void 0 ? void 0 : _p.toString()) + " ";
    }
    return expr;
}
var obj = {
    atSeconds: [1,5,10],
    runEveryXMins: {
        startAt: 1,
        every: 10
    },
    isEveryHour: true,
    isEveryDay: true,
    isEveryMonth: true,
    isEveryYear: true
};
console.log((0, exports.parseCronExpression)(obj));
