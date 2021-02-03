import React from "react";

import { dispatch } from "../../Store";
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
  const addToCart = 
    (foodItem: FoodItem, quantity: number): void => {
      dispatch(actionCreators.addToCart(foodItem, quantity));
    };

  return (
    <>
      <div className="menuSection">
        {foodLabels.map((label) => {
          return <MenuItem label={label} key={label} addToCart={addToCart} />;
        })}
      </div>
    </>
  );
};
