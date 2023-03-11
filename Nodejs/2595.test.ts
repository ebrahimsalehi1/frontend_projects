import { calculateNumber } from "./2596";

it("test case 1", () => {
  expect(calculateNumber([2, 3, 5, 7])).toBe(4);
});

it("test case 2", () => {
  expect(calculateNumber([1])).toBe(1000);
});
