import { render } from "@testing-library/react";
import SignupForm from "../../src/components/SignupForm";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import renderer from "react-test-renderer"

test("SignupForm renders without crashing", () => {
  render(<SignupForm />);
});

test("SignupForm renders correctly according to snapshot.", () => {
  const tree = renderer
    .create(<SignupForm />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})

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
