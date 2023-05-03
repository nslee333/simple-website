import { render } from "@testing-library/react";
import SignupForm from "../../src/components/SignupForm";
import { toBeInTheDocument } from "@testing-library/jest-dom";

test("SignupForm renders without crashing", () => {
  render(<SignupForm />);
});

test("Name input is present", () => {
  const { getByLabelText } = render(<SignupForm />);

  const nameInput = getByLabelText("name");

  expect(nameInput).toBeInTheDocument();
});

test("Email input is present", () => {
  const { getByLabelText } = render(<SignupForm />);

  const emailInput = getByLabelText("name");

  expect(emailInput).toBeInTheDocument();
});

test("Check if Sign up button is present", () => {
  const { getByText } = render(<SignupForm />);

  const signUpButton = getByText("Sign up");

  expect(signUpButton).toBeInTheDocument();
});
