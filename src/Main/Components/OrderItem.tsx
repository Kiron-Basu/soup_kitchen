import { FoodItem } from "../Enums/FoodItems";

interface IOrderItem {
  foodItem: string;
  quantity: number;
}

export const OrderItem: React.FC<IOrderItem> = ({ foodItem, quantity }) => {
  //   const foodItem: FoodItem = FoodItem[label as keyof typeof FoodItem];
  return (
    <div>
      <p>{`${foodItem} : ${quantity}`}</p>
    </div>
  );
};
