import { render } from "@testing-library/react";
import Home from "../src/pages/Home";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

test("Renders Home without crashing", () => {
  render(<Home />);
});

test("Home renders correctly according to snapshot", () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})