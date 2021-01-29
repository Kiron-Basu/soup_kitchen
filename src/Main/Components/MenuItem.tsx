import { FoodItem } from "../Enums/FoodItems";

interface IMenuItem {
  increaseOrder: (foodItem: FoodItem) => void;
  decreaseOrder: (foodItem: FoodItem) => void;
  label: string;
}

export const MenuItem: React.FC<IMenuItem> = ({
  increaseOrder,
  decreaseOrder,
  label,
}) => {
  const foodItem: FoodItem = FoodItem[label as keyof typeof FoodItem];
  return (
    <div>
      <p>{label}</p>
      <p>photo</p>
      <button onClick={() => increaseOrder(foodItem)}>plus</button>
      <button onClick={() => decreaseOrder(foodItem)}>minus</button>
      <p>button -</p>
    </div>
  );
};
