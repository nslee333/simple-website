import { render } from "@testing-library/react";
import SignupForm from "../src/components/SignupForm";

test("SignupForm renders without crashing", () => {
  render(<SignupForm />);
});
