import { connect } from "react-redux";
import { IState } from "../Store/IState";
import { IOrderState } from "../Store/OrderBundle";
import { OrderItem } from "../Components/OrderItem";
import { FoodItem } from "../Enums/FoodItems";
import {
  getDiscounts,
  totalBeforeDiscounts,
} from "../Utilities/InvoiceUtilities";
import { IDiscount } from "../Interfaces/IDiscount";
import { OrderSummary } from "./OrderSummary";

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
  return (
    <div className={props.className}>
      <p>Order Section</p>
      {foodLabels.map((label) => {
        const quantity: number = order[label as keyof typeof FoodItem].quantity;
        const subtotal: number = order[label as keyof typeof FoodItem].subtotal;
        if (quantity > 0) {
          return (
            <OrderItem
              foodItem={label}
              quantity={quantity}
              subtotal={subtotal}
            />
          );
        }
      })}
      <OrderSummary preDiscountTotal={preDiscountTotal} discounts={discounts} />
    </div>
  );
};

function mapStateToProps(state: Readonly<IState>): IStoreProps {
  return { order: state.orderState };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
  OrderSection
);
