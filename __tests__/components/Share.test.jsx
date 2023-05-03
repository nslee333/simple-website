import { render, screen } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";
import Share from "../../src/components/Share";

test("Share renders without crashing", () => {
  render(<Share />);
});

test("Contact Us button has a href value of #contact", () => {
  render(<Share />);

  expect(screen.getByRole("link")).toHaveAttribute("href", "#contact");
});
