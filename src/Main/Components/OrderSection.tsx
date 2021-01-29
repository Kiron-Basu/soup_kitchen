import { connect } from "react-redux";
import { IState } from "../Store/IState";
import { IOrderState } from "../Store/OrderBundle";
interface IStoreProps {
  order: IOrderState;
}

export type IOrderSectionProps = IStoreProps;
export const OrderSection: React.FC<IOrderSectionProps> = (
  props
): JSX.Element => {
  const { order } = props;
  console.log("@@@ order", order);

  return <div>{order.bread}</div>;
};

function mapStateToProps(state: Readonly<IState>): IStoreProps {
  return { order: state.orderState };
}

export default connect<IStoreProps, {}, {}, IState>(mapStateToProps)(
  OrderSection
);
