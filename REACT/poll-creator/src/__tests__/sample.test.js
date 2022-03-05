import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PollCreator } from "../components/PollCreator";

test("should create description item for selected emoji", async () => {
  const { getByTestId, container } = render(<PollCreator />);
  fireEvent.click(
    container.querySelector(".poll-description .accordion-title")
  );
  fireEvent.click(container.querySelector(".poll-emoji .accordion-title"));

  expect(
    container.querySelector(".poll-description .accordion-body")
  ).toHaveTextContent("");

  const heartEmoji = container.querySelector(
    "#emoji-checkbox-input[name=heart]"
  );

  const wait = (time) =>
    act(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    });

  fireEvent.click(heartEmoji);
  await wait(500);
  const descriptionSection = getByTestId("poll-description");
  const descriptionInput = descriptionSection.querySelector("input#heart");
  const descriptionLabel = descriptionSection.querySelector("label[for=heart]");
  expect(descriptionSection).toContainElement(descriptionInput);
  expect(descriptionSection).toContainElement(descriptionLabel);
  const descriptionImg = descriptionSection.querySelector("img[alt=heart]");
  expect(descriptionSection).toContainElement(descriptionImg);
});
