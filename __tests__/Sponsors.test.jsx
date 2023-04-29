import { render } from "@testing-library/react"
import Sponsors from "../src/components/Sponsors"

test("Sponsors renders without crashing", () => {
  render(<Sponsors />)
})