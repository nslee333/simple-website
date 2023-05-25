import { urlFor } from "../src/pages/index.js";
import { render } from "@testing-library/react";
import App from "../src/pages/index.js";
import { client, getStaticProps, builder } from "../src/pages/index.js";
import renderer from "react-test-renderer";

test("App renders without crashing", () => {
  render(<App />);
});

test("App renders correctly according to snapshot", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("client is defined", () => {
  const clientInstance = client;

  expect(clientInstance).toBeDefined();
});

test("getStaticProps to be defined", () => {
  const props = getStaticProps;

  expect(props).toBeDefined();
});

test("builder is defined", () => {
  const builderInstance = builder;

  expect(builderInstance).toBeDefined();
});
