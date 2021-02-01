import React from "react";
import { useDispatch } from "react-redux";
import { FoodItem } from "../Enums/FoodItems";
import { actionCreators } from "../Store/OrderBundle";
import "../Styles/MenuSection.scss";

import { MenuItem } from "./MenuItem";

interface IMenuSection {
  foodLabels: ReadonlyArray<string>;
}
export const MenuSection: React.FC<IMenuSection> = ({
  foodLabels,
}): JSX.Element => {
  const dispatch = useDispatch();

  const addToCart = (foodItem: FoodItem, quantity: number): void => {
    dispatch(actionCreators.addToCart(foodItem, quantity));
  };

  return (
    <>
      <div className="menuSection">
        {foodLabels.map((label) => {
          return <MenuItem label={label} addToCart={addToCart} />;
        })}
      </div>
    </>
  );
};
