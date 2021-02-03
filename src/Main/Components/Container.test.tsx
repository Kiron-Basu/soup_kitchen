import React from "react";
import { 
  ShallowWrapper, 
  shallow 
} from "enzyme";

import { Container } from "./Container";

describe("App container tests", () => {
  test("Renders container correctly", () => {
    const component: ShallowWrapper = shallow(<Container />);

    expect(component).toMatchSnapshot();
  });
});
