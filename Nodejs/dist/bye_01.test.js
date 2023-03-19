"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bye_01_1 = require("./bye_01");
it("bye 01", () => {
    expect((0, bye_01_1.getHowManyTimes)(1)).toBe(2);
    expect((0, bye_01_1.getHowManyTimes)(2)).toBe(3);
    expect((0, bye_01_1.getHowManyTimes)(3)).toBe(3);
    expect((0, bye_01_1.getHowManyTimes)(4)).toBe(3);
});
