import React from "react";
import { connect } from "react-redux";
import { createLogicalAnd } from "typescript";
import { useDispatch } from "react-redux";
import { FoodItem } from "../Enums/FoodItems";
import { actionCreators } from "../Store/OrderBundle";

const dispatch = useDispatch();
export const increaseOrder = (foodItem: FoodItem): void => {
  //export to handlers file?
  // setOrderState({ ...orderState, bread: orderState.bread + 1 }); //right way?
  console.log("@@@ chucks away add", foodItem);
  dispatch(actionCreators.addItem(foodItem));
};
export const decreaseOrder = (foodItem: FoodItem): void => {
  //export to handlers file?
  // setOrderState({ ...orderState, bread: orderState.bread + 1 }); //right way?
  console.log("@@@ chucks away remove", foodItem);
  dispatch(actionCreators.removeItem(foodItem));
};

// function mapDispatchToProps(){
//       completedHandlers
// }

// export default connect<{}, {}, {}, IOrderState>(null, mapDispatchToProps)(OrderHandlers);
