import { connect } from "react-redux";
import { IState } from "../Store/IState";
import { IOrderState } from "../Store/OrderBundle";
import { OrderItem } from "../Components/OrderItem";
import { FoodItem } from "../Enums/FoodItems";
interface IStoreProps {
  order: IOrderState;
}

interface IRawProps {
  foodLabels: ReadonlyArray<string>;
}

export type IOrderSectionProps = IStoreProps & IRawProps;
export const OrderSection: React.FC<IOrderSectionProps> = (
  props
): JSX.Element => {
  const { order, foodLabels } = props;
  return (
    <div>
      <p>Order Section</p>
      {foodLabels.map((label) => {
        const quantity: number = order[label as keyof typeof FoodItem];
        if (quantity > 0) {
          return <OrderItem foodItem={label} quantity={quantity} />;
        }
      })}
      //order item //summary // order
    </div>
  );
};

function mapStateToProps(state: Readonly<IState>): IStoreProps {
  return { order: state.orderState };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
  OrderSection
);
