import { render, screen } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";
import Sponsors from "../src/components/Sponsors";

test("Sponsors renders without crashing", () => {
  render(<Sponsors />);
});

test("Uptech logo has link to uptechstudio.com", () => {
  render(<Sponsors />);

  expect(screen.getByRole("link", { name: "uptech logo" })).toHaveAttribute(
    "href",
    "https://www.uptechstudio.com/"
  );
});

test("tech oregon logo has link to techoregon.org", () => {
  render(<Sponsors />);

  expect(
    screen.getByRole("link", { name: "tech oregon logo" })
  ).toHaveAttribute("href", "https://www.techoregon.org/");
});

test("Codepen logo has link to codepen.io", () => {
  render(<Sponsors />);

  expect(screen.getByRole("link", { name: "codepen logo" })).toHaveAttribute(
    "href",
    "https://codepen.io/"
  );
});

test("Ladd group logo has link to bendpropertysource.com", () => {
  render(<Sponsors />);

  expect(screen.getByRole("link", { name: "ladd group logo" })).toHaveAttribute(
    "href",
    "https://www.bendpropertysource.com/"
  );
});

test("Contact Us has link to contact form", () => {
  render(<Sponsors />);

  expect(screen.getByRole("link", { name: "Contact Us" })).toHaveAttribute(
    "href",
    "#contact"
  );
});
