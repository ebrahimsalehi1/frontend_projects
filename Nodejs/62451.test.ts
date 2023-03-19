import { searchForTorob } from "./62451";

it("62451", () => {
  expect(searchForTorob(1, 5, 10, 6)).toBe("BORO BORO");

  //expect(searchForTorob(1, -5, -10, -5)).toBe("WAIT WAIT");

  expect(searchForTorob(1, 6, 10, -5)).toBe("SEE YOU");

  //..........

  expect(searchForTorob(1, -6, 10, 5)).toBe("BORO BORO");

  expect(searchForTorob(1, -5, 10, 5)).toBe("BORO BORO");

  // expect(searchForTorob(1, -5, 10, -5)).toBe("BORO BORO");
});
