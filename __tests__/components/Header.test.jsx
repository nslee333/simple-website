import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../../src/components/Header";

test("Header renders without crashing", () => {
  render(<Header />);
});

it("Header renders correctly according to snapshot", () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})