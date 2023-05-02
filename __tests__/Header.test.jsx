import { render } from "@testing-library/react";
import Header from "../src/components/Header";

test("Header renders without crashing", () => {
  render(<Header />);
});
