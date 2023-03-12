import { numberOfTeams } from "./80651";

it("80651", () => {
  expect(numberOfTeams([3, 2, 1, 5, 6, 7])).toBe(9);
  expect(numberOfTeams([1, 1, 2, 2, 3, 3])).toBe(6);
});
