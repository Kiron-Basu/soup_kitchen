import React, { useState } from "react";
import { FoodItem } from "../Enums/FoodItems";
import "../Styles/MenuItem.scss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

interface IMenuItem {
  handleAddToCart: (foodItem: FoodItem, quantityState: number) => void;
  label: string;
}

export const MenuItem: React.FC<IMenuItem> = ({ handleAddToCart, label }) => {
  const [quantityState, setQuantityState] = useState(0);

  const handleIncrease = () => {
    setQuantityState(quantityState + 1);
  };
  const handleDecrease = () => {
    if (quantityState > 0) {
      setQuantityState(quantityState - 1);
    }
  };
  const foodItem: FoodItem = FoodItem[label as keyof typeof FoodItem];
  return (
    <div className="menuItem">
      <p>{label}</p>
      <p>photo</p>
      <div>
        <AddBoxIcon
          onClick={handleIncrease}
          className="menuItem_quantityButtons"
        >
          plus
        </AddBoxIcon>
        <IndeterminateCheckBoxBoxIcon
          onClick={handleDecrease}
          className="menuItem_quantityButtons"
        >
          minus
        </IndeterminateCheckBoxBoxIcon>
      </div>
      <button onClick={() => handleAddToCart(foodItem, quantityState)}>
        Update cart
      </button>
      <p>count: {quantityState}</p>
    </div>
  );
};
