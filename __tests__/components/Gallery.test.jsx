import { render } from "@testing-library/react";
import Gallery from "../../src/components/Gallery";
import renderer from "react-test-renderer";
test("Gallery renders without crashing", () => {
  render(<Gallery />);
});

test("Gallery renders correctly according to snapshot.", () => {
  const tree = renderer
    .create(<Gallery />)
    .toJSON();

    expect(tree).toMatchSnapshot();
})
