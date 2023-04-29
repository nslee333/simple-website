import {render } from "@testing-library/react";
import Footer from "../src/components/Footer"

test("Footer renders without crashing", () => {
  render(<Footer />)
})