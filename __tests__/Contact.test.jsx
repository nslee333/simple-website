import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact";

test("Contact renders without crashing", () => {
  render(<Contact />);
});
