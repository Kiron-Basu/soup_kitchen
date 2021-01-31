import React from "react";
import { validateLocaleAndSetLanguage } from "typescript";
import { IDiscount } from "../Interfaces/IDiscount";
import { poundify } from "../Utilities/InvoiceUtilities";

interface IOrderSummary {
  preDiscountTotal: number;
  discounts: ReadonlyArray<IDiscount>;
}

export const OrderSummary: React.FC<IOrderSummary> = ({
  preDiscountTotal,
  discounts,
}) => {
  return (
    <div>
      <p>Summary</p>
      {renderSubTotal()}
      {renderDiscounts()}
      {renderTotal()}
      <button>Order</button>
    </div>
  );

  function renderSubTotal() {
    return preDiscountTotal > 0 ? (
      <p>Subtotal: {poundify(preDiscountTotal)}</p>
    ) : null;
  }

  function renderTotal() {
    const grandTotal: number =
      preDiscountTotal -
      discounts.reduce((acc, val) => {
        return (acc += val.discount);
      }, 0);
    return grandTotal > 0 ? <p>Total: {poundify(grandTotal)}</p> : null;
  }

  function renderDiscounts(): Array<JSX.Element> | JSX.Element | null {
    if (preDiscountTotal <= 0) {
      return null;
    }

    return discounts.some((discount) => discount.discount > 0) ? (
      discounts.map((discount) => (
        <p>
          {`${discount.type}`} : {poundify(discount.discount)}
        </p>
      ))
    ) : (
      <p>No discounts applied!</p>
    );
  }
};
