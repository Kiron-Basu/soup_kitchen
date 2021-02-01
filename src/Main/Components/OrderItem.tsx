import { poundify } from "../Utilities/InvoiceUtilities";
import Divider from "@material-ui/core/Divider";
import { FoodItem } from "../Enums/FoodItems";
import "../Styles/OrderItem.scss";
import DeleteIcon from "@material-ui/icons/Delete";

interface IOrderItem {
  foodItem: string;
  quantity: number;
  subtotal: number;
  handleClearItem: (item: FoodItem) => void;
}

export const OrderItem: React.FC<IOrderItem> = ({
  foodItem,
  quantity,
  subtotal,
  handleClearItem,
}) => {
  return (
    <div className="orderItem">
      <p className="orderItem__description">
        {foodItem} x {quantity} &nbsp; &nbsp; | &nbsp; &nbsp;{" "}
        {poundify(subtotal)}
      </p>
      <DeleteIcon
        className="orderItem__deleteIcon"
        color="secondary"
        onClick={() =>
          handleClearItem(FoodItem[foodItem as keyof typeof FoodItem])
        }
      />
      <Divider variant="fullWidth" />
    </div>
  );
};
