import { render } from "@testing-library/react";
import Newsletter from "../../src/components/Newsletter";
import renderer from "react-test-renderer";

test("Newsletter renders without crashing", () => {
  render(<Newsletter />);
});

test("Newsletter renders correctly according to snapshot", () => {
  const tree = renderer.create(<Newsletter />).toJSON();

  expect(tree).toMatchSnapshot();
});
