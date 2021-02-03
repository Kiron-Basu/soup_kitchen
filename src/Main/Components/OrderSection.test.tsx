import React from "react";
import { 
  ShallowWrapper,
  shallow 
} from "enzyme";

import * as Store from "../../Store";
import { OrderSection } from "./OrderSection";
import { defaultState } from "../Interfaces/__mocks__/defaultState";

describe("OrderSection tests", () => {
  const dispatchMock: jest.SpyInstance<void> = jest
    .spyOn(Store, "dispatch")
    .mockImplementation();

  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState);

  test("Renders OrderSection correctly", () => {
    const component: ShallowWrapper = shallow(
      <OrderSection foodLabels={foodLabels} order={defaultState} />
    );

    expect(component).toMatchSnapshot();
  });
});
