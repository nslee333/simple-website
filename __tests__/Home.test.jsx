import {render, screen} from "@testing-library/react";
import Home from "../pages/Home";
import "@testing-library/jest-dom"

test("Renders Home without crashing", () => {
  render(<Home />);
});