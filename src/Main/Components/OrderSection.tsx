import React, { RefObject } from "react";
import { connect } from "react-redux";

import { IState } from "../Store/IState";
import { 
  actionCreators,
  IOrderState 
} from "../Store/OrderBundle";
import { OrderItem } from "../Components/OrderItem";
import { FoodItem } from "../Enums/FoodItems";
import {
  getDiscounts,
  totalBeforeDiscounts,
} from "../Utilities/InvoiceUtilities";
import { IDiscount } from "../Interfaces/IDiscount";
import { OrderSummary } from "./OrderSummary";
import { dispatch } from "../../Store";

interface IStoreProps {
  order: IOrderState;
}

interface IRawProps {
  foodLabels: ReadonlyArray<string>;
  className?: string;
}

export type IOrderSectionProps = IStoreProps & IRawProps;
export const OrderSection: React.FC<IOrderSectionProps> = (
  props
): JSX.Element => {
  const { order, foodLabels } = props;
  const preDiscountTotal: number = totalBeforeDiscounts(order);
  const discounts: ReadonlyArray<IDiscount> = getDiscounts(order);

  const handleClearItem = (item: FoodItem) => {
    dispatch(actionCreators.clearItem(item));
  };
  const ref: RefObject<SVGSVGElement> = React.createRef();
  
  return (
    <div className={props.className}>
      <h2 className={`${props.className}__title`}>Order Summary</h2>
      {foodLabels.map((label) => {
        const quantity: number = order[label as keyof typeof FoodItem].quantity;
        const subtotal: number = order[label as keyof typeof FoodItem].subtotal;
        if (quantity > 0) {
          return (
            <OrderItem
              ref={ref}
              key={label}
              foodItem={label}
              quantity={quantity}
              subtotal={subtotal}
              handleClearItem={handleClearItem}
            />
          );
        }
        return null;
      })}
      <OrderSummary preDiscountTotal={preDiscountTotal} discounts={discounts} />
    </div>
  );
};

function mapStateToProps(state: Readonly<IState>): IStoreProps {
  return { order: state.orderState };
}

export default connect<IStoreProps, {}, {}, IState>(
  mapStateToProps,
  null,
  null,
  { forwardRef: true }
)(OrderSection);
