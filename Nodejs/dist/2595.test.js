"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2596_1 = require("./2596");
describe("2596", () => {
    it("test case 1", () => {
        expect((0, _2596_1.calculateNumber)([2, 3, 5, 7])).toBe(4);
    });
    it("test case 2", () => {
        expect((0, _2596_1.calculateNumber)([1])).toBe(1000);
    });
    it("test case 3", () => {
        expect((0, _2596_1.calculateNumber)([10, 20])).toBe(5);
    });
    it("test case 4", () => {
        expect((0, _2596_1.calculateNumber)([1000])).toBe(1);
    });
    it("test case 5", () => {
        expect((0, _2596_1.calculateNumber)([2, 3, 4, 5])).toBe(8);
    });
    it("test case 6", () => {
        expect((0, _2596_1.calculateNumber)([100])).toBe(10);
        expect((0, _2596_1.calculateNumber)([10])).toBe(100);
        expect((0, _2596_1.calculateNumber)([375])).toBe(2);
        expect((0, _2596_1.calculateNumber)([3])).toBe(333);
    });
});
