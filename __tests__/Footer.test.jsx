import {render } from "@testing-library/react";
import Footer from "../src/components/Footer"
import {getByRole} from "@testing-library/jest-dom";

test("Footer renders without crashing", () => {
  render(<Footer />)
})

test("Meetup logo has link to Meetup page.", () => {
  render(<Footer />)

  expect(screen.getByRole('link', {name: "github logo"})).toHaveAttribute(
    "href",
    "https://github.com/BendJS/simple-website"
  );
})

// & Trying to get the test to pass :) <3
// * Left off at building unit tests for components.