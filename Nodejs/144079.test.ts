import { getSumAll } from "./144079";

it("144979", () => {
  //   expect(getSumAll(10)).toBe("");

  expect(getSumAll(1)).toBe(1);
  expect(getSumAll(2)).toBe(4);
  expect(getSumAll(5)).toBe(57);

  expect(getSumAll(6)).toBe(120);
  expect(getSumAll(7)).toBe(247);

  expect(getSumAll(10)).toBe(2027);
  expect(getSumAll(11)).toBe(4056);
  expect(getSumAll(20)).toBe(2078698);
});
