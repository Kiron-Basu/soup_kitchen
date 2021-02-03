import React from "react";
import { 
  ShallowWrapper,
  shallow 
} from "enzyme";

import { OrderSummary } from "./OrderSummary";
import { defaultDiscount } from "../Interfaces/__mocks__/defaultDiscount";

describe("OrderSummary tests", () => {
  test("Renders OrderSummary correctly", () => {
    const component: ShallowWrapper = shallow(
      <OrderSummary discounts={[defaultDiscount]} preDiscountTotal={200} />
    );

    expect(component).toMatchSnapshot();
  });
});
