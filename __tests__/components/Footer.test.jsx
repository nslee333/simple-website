import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/Footer";
import { toHaveAttribute } from "@testing-library/jest-dom";
import renderer from "react-test-renderer";

test("Footer renders without crashing", () => {
  render(<Footer />);
});

test("Footer renders correctly according to snapshot.", () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("Meetup logo has link to Meetup page.", () => {
  render(<Footer />);

  expect(
    screen.getByRole("link", { name: "Contribute to this website GitHub Logo" })
  ).toHaveAttribute("href", "https://github.com/BendJS/simple-website");
});
