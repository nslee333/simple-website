import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact";

test("Contact renders without crashing", () => {
  render(<Contact />);
});

test("Name input is present", () => {
  const { getByLabelText } = render(<Contact />);

  const nameInput = getByLabelText("name");

  expect(nameInput).toBeInTheDocument();
});

test("Email input is present", () => {
  const { getByLabelText } = render(<Contact />);

  const emailInput = getByLabelText("email");

  expect(emailInput).toBeInTheDocument();
});

test("Check if Sign up button is present", () => {
  const { getByText } = render(<Contact />);

  const signUpButton = getByText("Send");

  expect(signUpButton).toBeInTheDocument();
});