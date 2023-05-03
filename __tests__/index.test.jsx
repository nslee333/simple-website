import { urlFor } from "../src/pages/index.js";
import { render } from "@testing-library/react";
import App from "../src/pages/index.js"
import {client, getStaticProps, builder} from "../src/pages/index.js"


test("App renders without crashing", () => {
  render(<App />)
})

test("client is defined", () => {
  const clientInstance = client;

  expect(clientInstance).toBeDefined();
});

test("getStaticProps to be defined", () => {
  const props = getStaticProps;
  
  expect(props).toBeDefined();
})

test("builder is defined", () => {
  const builderInstance = builder;
  
  expect(builderInstance).toBeDefined();
})