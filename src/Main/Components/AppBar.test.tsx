import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import ButtonAppBar from "./AppBar";

describe("App AppBar tests", () => {
  test("Renders AppBar correctly", () => {
    const component: ShallowWrapper = shallow(<ButtonAppBar />);

    expect(component).toMatchSnapshot();
  });
});
