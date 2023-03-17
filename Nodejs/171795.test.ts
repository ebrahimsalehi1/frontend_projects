import { timeIndication } from "./171795";

it("171795", () => {
  expect(
    timeIndication([
      [1, 10, 2],
      [10, 9, 3],
    ])
  ).toStrictEqual([10, 117]);
});
