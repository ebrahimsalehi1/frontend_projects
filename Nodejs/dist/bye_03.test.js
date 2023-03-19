"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bye_03_1 = require("./bye_03");
it("bye_03", () => {
    expect((0, bye_03_1.jozvehDarsi)([11, 5, 6, 5])).toStrictEqual([5, 11]);
    expect((0, bye_03_1.jozvehDarsi)([1, 2, 3, 6, 4, 5, 6, 21])).toStrictEqual([6, 21]);
    expect((0, bye_03_1.jozvehDarsi)([10, 20, 10, 30])).toStrictEqual([10, 30]);
    expect((0, bye_03_1.jozvehDarsi)([20, 2, 4, 6, 8])).toStrictEqual([6, 20]);
});
