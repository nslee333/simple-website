import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/Footer";
import { toHaveAttribute } from "@testing-library/jest-dom";

test("Footer renders without crashing", () => {
  render(<Footer />);
});

test("Meetup logo has link to Meetup page.", () => {
  render(<Footer />);

  expect(
    screen.getByRole("link", { name: "Contribute to this website GitHub Logo" })
  ).toHaveAttribute("href", "https://github.com/BendJS/simple-website");
});
