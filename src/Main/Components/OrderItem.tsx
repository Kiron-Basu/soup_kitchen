import { FoodItem } from "../Enums/FoodItems";
import { poundify } from "../Utilities/InvoiceUtilities";

interface IOrderItem {
  foodItem: string;
  quantity: number;
  subtotal: number;
}

export const OrderItem: React.FC<IOrderItem> = ({
  foodItem,
  quantity,
  subtotal,
}) => {
  return (
    <div>
      <p>
        {`${foodItem} x ${quantity}`} | {poundify(subtotal)}
      </p>
    </div>
  );
};
