import { render } from "@testing-library/react";
import MemberSpotlight from "../../src/components/MemberSpotlight";
import client from "../../src/components/MemberSpotlight";
import { getStaticProps } from "../../src/components/MemberSpotlight";
import renderer from "react-test-renderer";

import * as matchers from "jest-extended";
expect.extend(matchers);

test("MemberSpotlight renders without crashing", () => {
  render(<MemberSpotlight />);
});

test("Memberspotlight renders correctly according to snapshot.", () => {
  const tree = renderer.create(<MemberSpotlight />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("Client is defined", () => {
  const clientInstance = client;

  expect(clientInstance).toBeDefined();
});

test("getStaticProps is defined.", () => {
  const props = getStaticProps();

  expect(props).toBeDefined();
});
