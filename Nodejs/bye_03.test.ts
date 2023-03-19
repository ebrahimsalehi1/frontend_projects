import { jozvehDarsi } from "./bye_03";

it("bye_03", () => {
  expect(jozvehDarsi([11, 5, 6, 5])).toStrictEqual([5, 11]);

  expect(jozvehDarsi([1, 2, 3, 6, 4, 5, 6, 21])).toStrictEqual([6, 21]);

  expect(jozvehDarsi([10, 20, 10, 30])).toStrictEqual([10, 30]);

  expect(jozvehDarsi([20, 2, 4, 6, 8])).toStrictEqual([6, 20]);
});
