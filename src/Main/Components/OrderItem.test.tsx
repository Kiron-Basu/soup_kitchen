import React, { RefObject } from "react";
import { 
  ShallowWrapper,
  shallow 
} from "enzyme";

import { OrderItem } from "./OrderItem";
import { FoodItem } from "../Enums/FoodItems";

describe("OrderItem tests", () => {
  const handleClearItem: jest.Mock = jest.fn();

  test("Renders OrderItem correctly", () => {
    const ref: RefObject<SVGSVGElement> = React.createRef();
    const component: ShallowWrapper = shallow(
      <OrderItem
        ref={ref}
        quantity={0}
        subtotal={0}
        foodItem={FoodItem.bread}
        handleClearItem={handleClearItem}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
