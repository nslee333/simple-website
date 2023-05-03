import { render } from "@testing-library/react";
import StayConnected from "../../src/components/StayConnected";
import renderer from "react-test-renderer";

test("StayConnected renders without crashing", () => {
  render(<StayConnected />);
});

test("StayConnected renders correctly according to snapshot", () => {
  const tree = renderer
    .create(<StayConnected />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
