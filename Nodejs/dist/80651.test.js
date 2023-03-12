"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _80651_1 = require("./80651");
it("80651", () => {
    expect((0, _80651_1.numberOfTeams)([3, 2, 1, 5, 6, 7])).toBe(9);
    expect((0, _80651_1.numberOfTeams)([1, 1, 2, 2, 3, 3])).toBe(6);
});
