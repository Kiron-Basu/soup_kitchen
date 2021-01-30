import React, { useState } from "react";
import { connect } from "react-redux";
import { dispatch } from "../../Store";
import { FoodItem } from "../Enums/FoodItems";

import { actionCreators, IOrderState } from "../Store/OrderBundle"; //reinstate interface from interface folder?
import { MenuSection } from "./MenuSection";
import OrderSection from "./OrderSection";

export const Container = () => {
  const defaultState: IOrderState = {
    // use enum?
    bread: 0,
    cheese: 0,
    milk: 0,
    butter: 0,
    soup: 0,
  };
  const [orderState, setOrderState] = useState<IOrderState>(defaultState); // bin?
  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState); //get from store?

  return (
    <div>
      <MenuSection foodLabels={foodLabels} />
      <OrderSection foodLabels={foodLabels} />
    </div>
  );
};
