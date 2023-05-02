import { render } from "@testing-library/react";
import Gallery from "../src/components/Gallery";

test("Gallery renders without crashing", () => {
  render(<Gallery />);
});
