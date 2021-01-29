import React from "react";
import { useDispatch } from "react-redux";
import { FoodItem } from "../Enums/FoodItems";
import { actionCreators } from "../Store/OrderBundle";

import { MenuItem } from "./MenuItem";

interface IMenuSection {
  foodLabels: ReadonlyArray<string>;
}
export const MenuSection: React.FC<IMenuSection> = ({
  foodLabels,
}): JSX.Element => {
  const dispatch = useDispatch();

  const increaseOrder = (foodItem: FoodItem): void => {
    dispatch(actionCreators.addItem(foodItem));
  };

  const decreaseOrder = (foodItem: FoodItem): void => {
    dispatch(actionCreators.removeItem(foodItem));
  };

  return (
    <div>
      <p>Menu Section</p>
      {foodLabels.map((label) => {
        return (
          <MenuItem
            label={label}
            increaseOrder={increaseOrder}
            decreaseOrder={decreaseOrder}
          />
        );
      })}
    </div>
  );
};
