import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../src/components/Contact";
import renderer from "react-test-renderer";

test("Contact renders without crashing", () => {
  render(<Contact />);
});

test("Contact renders correctly according to snapshot.", () => {
  const tree = renderer
    .create(<Contact />)
    .toJSON();

    expect(tree).toMatchSnapshot();
})

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
