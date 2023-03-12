import { calculateNumber } from "./2596";

describe("2596", () => {
  it("test case 1", () => {
    expect(calculateNumber([2, 3, 5, 7])).toBe(4);
  });

  it("test case 2", () => {
    expect(calculateNumber([1])).toBe(1000);
  });

  it("test case 3", () => {
    expect(calculateNumber([10, 20])).toBe(5);
  });

  it("test case 4", () => {
    expect(calculateNumber([1000])).toBe(1);
  });

  it("test case 5", () => {
    expect(calculateNumber([2, 3, 4, 5])).toBe(8);
  });

  it("test case 6", () => {
    expect(calculateNumber([100])).toBe(10);
    expect(calculateNumber([10])).toBe(100);
    expect(calculateNumber([375])).toBe(2);
    expect(calculateNumber([3])).toBe(333);
  });
});
