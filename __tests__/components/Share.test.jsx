import { render, screen } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";
import Share from "../../src/components/Share";
import renderer from "react-test-renderer";

test("Share renders without crashing", () => {
  render(<Share />);
});

test("Share renders correctly according to snapshot", () => {
  const tree = renderer
    .create(<Share />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})

test("Contact Us button has a href value of #contact", () => {
  render(<Share />);

  expect(screen.getByRole("link")).toHaveAttribute("href", "#contact");
});
