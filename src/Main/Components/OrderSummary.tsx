import React from "react";
import { 
  Button,
  Divider,
  List,
  ListItem,
  Typography 
} from "@material-ui/core";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";

import { IDiscount } from "../Interfaces/IDiscount";
import { poundify } from "../Utilities/InvoiceUtilities";
import "../Styles/OrderSummary.scss";

interface IOrderSummary {
  preDiscountTotal: number;
  discounts: ReadonlyArray<IDiscount>;
}

export const OrderSummary: React.FC<IOrderSummary> = ({
  preDiscountTotal,
  discounts,
}) => {
  return (
    <List className="orderSummary">
      {preDiscountTotal <= 0 ? <h5>Your cart is empty!</h5> : null}
      {renderDiscounts()}
      {renderSubTotal()}
      {renderTotal()}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={preDiscountTotal <= 0}
      >
        Order
      </Button>
    </List>
  );

  function renderSubTotal() {
    return preDiscountTotal > 0 ? (
      <Typography variant="h6">
        <Divider />
        <div className="orderSummary__subtotal">
          Subtotal: {poundify(preDiscountTotal)}
        </div>
      </Typography>
    ) : null;
  }

  function renderTotal() {
    const grandTotal: number =
      preDiscountTotal -
      discounts.reduce((acc, val) => {
        return (acc += val.discount);
      }, 0);
    return grandTotal > 0 ? (
      <Typography variant="h5" gutterBottom={true}>
        <Divider />
        <div className="orderSummary__total">Total: {poundify(grandTotal)}</div>
        <Divider />
      </Typography>
    ) : null;
  }

  function renderDiscounts(): Array<JSX.Element | null> | JSX.Element | null {
    if (preDiscountTotal <= 0) {
      return null;
    }

    return discounts.some((discount) => discount.discount > 0) ? (
      discounts.map((discount, i) =>
        discount.discount > 0 ? (
          <ListItem key={i + "discount"}>
            <MoneyOffIcon fontSize="small" />
            {`${discount.type}`} : {poundify(discount.discount)}
          </ListItem>
        ) : null
      )
    ) : (
      <ListItem>No discounts applied!</ListItem>
    );
  }
};
