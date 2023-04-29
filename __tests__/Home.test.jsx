import {render, screen} from "@testing-library/react";
import Home from "../src/pages/Home"
import "@testing-library/jest-dom"

test("Renders Home without crashing", () => {
  render(<Home />);
});