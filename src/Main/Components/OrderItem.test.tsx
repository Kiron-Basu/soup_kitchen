import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import { OrderItem } from "./OrderItem";
import { FoodItem } from "../Enums/FoodItems";

describe("OrderItem tests", () => {
  const handleClearItem: jest.Mock = jest.fn();

  test("Renders OrderItem correctly", () => {
    const component: ShallowWrapper = shallow(
      <OrderItem
        quantity={0}
        subtotal={0}
        foodItem={FoodItem.bread}
        handleClearItem={handleClearItem}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
