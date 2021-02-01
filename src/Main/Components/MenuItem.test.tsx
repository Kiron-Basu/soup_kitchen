import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import { MenuItem } from "./MenuItem";

describe("MenuItem tests", () => {
  const addToCart = jest.fn();

  test("Renders MenuItem correctly", () => {
    const component: ShallowWrapper = shallow(
      <MenuItem addToCart={addToCart} label={"test"} />
    );

    expect(component).toMatchSnapshot();
  });
});
