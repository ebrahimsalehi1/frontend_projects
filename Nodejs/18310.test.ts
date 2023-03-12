import { stringProcess } from "./18310";

it("1830", () => {
  expect(stringProcess("abcab", "ababcabab").result).toBe(true);
  expect(stringProcess("abcd", "bcdabd").result).toBe(false);
  expect(stringProcess("abc", "dabcd").result).toBe(true);
  expect(stringProcess("abc", "").result).toBe(false);
});
