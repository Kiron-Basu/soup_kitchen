import React, { useState } from "react";
import { FoodItem } from "../Enums/FoodItems";

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
    <div>
      <p>{label}</p>
      <p>photo</p>
      <button onClick={handleIncrease}>plus</button>
      <button onClick={handleDecrease}>minus</button>
      <button onClick={() => handleAddToCart(foodItem, quantityState)}>
        Update cart
      </button>
      <p>count: {quantityState}</p>
    </div>
  );
};
