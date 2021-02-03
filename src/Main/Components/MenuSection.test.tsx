import React from "react";
import { 
  ShallowWrapper,
  shallow 
} from "enzyme";

import { MenuSection } from "./MenuSection";

describe("MenuSection tests", () => {
  const foodLabels: ReadonlyArray<string> = ["test"];

  test("Renders MenuSection correctly", () => {
    const component: ShallowWrapper = shallow(
      <MenuSection foodLabels={foodLabels} />
    );

    expect(component).toMatchSnapshot();
  });
});
