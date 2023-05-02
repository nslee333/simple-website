import { render } from "@testing-library/react";
import Newsletter from "../src/components/Newsletter";

test("Newsletter renders without crashing", () => {
  render(<Newsletter />);
});
