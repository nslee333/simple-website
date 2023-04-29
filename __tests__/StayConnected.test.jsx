import { render } from "@testing-library/react";
import StayConnected from "../src/components/StayConnected"

test("StayConnected renders without crashing", () => {
  render(<StayConnected />)
})