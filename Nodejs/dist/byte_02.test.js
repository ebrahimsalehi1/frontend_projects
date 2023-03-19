"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bye_02_1 = require("./bye_02");
it("bye_02", () => {
    expect((0, bye_02_1.Tardasti)(["11011"])).toStrictEqual([1]);
    expect((0, bye_02_1.Tardasti)(["01", "00010", "11011", "111000", "101010101"])).toStrictEqual([1, 2, 1, 1, 4]);
});
