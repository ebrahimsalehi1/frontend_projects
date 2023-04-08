"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _35253_1 = require("./35253");
it("35253", () => {
    expect((0, _35253_1.findSolution)([4, 3, 1, 5, 2])).toBe(4);
    expect((0, _35253_1.findSolution)([2, 4, 5, 1, 3])).toBe(3);
});
