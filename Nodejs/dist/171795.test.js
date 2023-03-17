"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _171795_1 = require("./171795");
it("171795", () => {
    expect((0, _171795_1.timeIndication)([
        [1, 10, 2],
        [10, 9, 3],
    ])).toStrictEqual([10, 117]);
});
