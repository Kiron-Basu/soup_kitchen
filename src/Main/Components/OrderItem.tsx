import React, { RefObject } from "react";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";

import { poundify } from "../Utilities/InvoiceUtilities";
import { FoodItem } from "../Enums/FoodItems";
import "../Styles/OrderItem.scss";


interface IOrderItem {
  foodItem: string;
  quantity: number;
  subtotal: number;
  handleClearItem: (item: FoodItem) => void;
  ref: RefObject<SVGSVGElement>;
}
//@ts-ignore for now
export const OrderItem: React.FC<IOrderItem> = React.forwardRef(
  (props, ref): JSX.Element => {
    const { foodItem, quantity, subtotal, handleClearItem } = props;

    return (
      <div className="orderItem">
        <p className="orderItem__description">
          {foodItem} x {quantity} &nbsp; &nbsp; | &nbsp; &nbsp;{" "}
          {poundify(subtotal)}
        </p>
        <DeleteIcon
          ref={ref}
          className="orderItem__deleteIcon"
          color="secondary"
          onClick={() =>
            handleClearItem(FoodItem[foodItem as keyof typeof FoodItem])
          }
        />
        <Divider variant="fullWidth" />
      </div>
    );
  }
);
