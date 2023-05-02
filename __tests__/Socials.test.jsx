import { render, screen } from "@testing-library/react";
import Socials from "../src/components/Socials";
import { toHaveAttribute } from "@testing-library/jest-dom";

test("Socials renders without crashing", () => {
  render(<Socials />);
});

test("Meetup logo has link to Meetup page.", () => {
  render(<Socials />);

  expect(
    screen.getByRole("link", { name: "Meetup Logo /BendJS" })
  ).toHaveAttribute("href", "https://www.meetup.com/BendJS/");
});

test("Slack logo has link to Slack page.", () => {
  render(<Socials />);

  expect(screen.getByRole("link", { name: "Slack Logo" })).toHaveAttribute(
    "href",
    "https://bendjs.slack.com/ssb/redirect"
  );
});

test("Youtube logo has link to Youtube page.", () => {
  render(<Socials />);

  expect(screen.getByRole("link", { name: "Youtube Logo" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/channel/UCCT744K1sGX-lPtaEivXCDQ"
  );
});
