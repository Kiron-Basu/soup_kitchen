import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import * as Store from "../../Store";
import { MenuSection } from "./MenuSection";

describe("MenuSection tests", () => {
  const dispatchMock: jest.SpyInstance<void> = jest
    .spyOn(Store, "dispatch")
    .mockImplementation();

  const foodLabels: ReadonlyArray<string> = ["test"];

  test("Renders MenuSection correctly", () => {
    const component: ShallowWrapper = shallow(
      <MenuSection foodLabels={foodLabels} />
    );

    expect(component).toMatchSnapshot();
  });
});
