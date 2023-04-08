"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _144079_1 = require("./144079");
it("144979", () => {
    //   expect(getSumAll(10)).toBe("");
    expect((0, _144079_1.getSumAll)(1)).toBe(1);
    expect((0, _144079_1.getSumAll)(2)).toBe(4);
    expect((0, _144079_1.getSumAll)(5)).toBe(57);
    expect((0, _144079_1.getSumAll)(6)).toBe(120);
    expect((0, _144079_1.getSumAll)(7)).toBe(247);
    expect((0, _144079_1.getSumAll)(10)).toBe(2027);
    expect((0, _144079_1.getSumAll)(11)).toBe(4056);
    expect((0, _144079_1.getSumAll)(20)).toBe(2078698);
});
