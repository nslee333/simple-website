import { render } from "@testing-library/react";
import Welcome from "../src/components/Welcome";

test("Welcome renders without crashing", () => {
  render(<Welcome />)
})