import { render } from "@testing-library/react";
import Share from "../src/components/Share";

test("Share renders without crashing", () => {
  render(<Share />);
});
