import { getHowManyTimes } from "./bye_01";

it("bye 01", () => {
  expect(getHowManyTimes(1)).toBe(2);
  expect(getHowManyTimes(2)).toBe(3);
  expect(getHowManyTimes(3)).toBe(3);

  expect(getHowManyTimes(4)).toBe(3);
});
