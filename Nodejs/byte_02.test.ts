import { Tardasti } from "./bye_02";

it("bye_02", () => {
  expect(Tardasti(["11011"])).toStrictEqual([1]);

  expect(
    Tardasti(["01", "00010", "11011", "111000", "101010101"])
  ).toStrictEqual([1, 2, 1, 1, 4]);
});
