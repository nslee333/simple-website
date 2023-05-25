import { render } from "@testing-library/react";
import Welcome from "../../src/components/Welcome";
import renderer from "react-test-renderer";

test("Welcome renders without crashing", () => {
  render(<Welcome />);
});

test("Welcome renders correctly according to snapshot.", () => {
  const tree = renderer.create(<Welcome />).toJSON();

  expect(tree).toMatchSnapshot();
});
