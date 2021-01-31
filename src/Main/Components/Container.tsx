import React, { useState } from "react";
import { connect } from "react-redux";
import { getInitialOrderState, IOrderState } from "../Store/OrderBundle"; //reinstate interface from interface folder?
import AppBar from "./AppBar";
import { MenuSection } from "./MenuSection";
import OrderSection from "./OrderSection";

export const Container = () => {
  const defaultState: IOrderState = getInitialOrderState();
  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState); //get from store?

  return (
    <div>
      <AppBar />
      <MenuSection foodLabels={foodLabels} />
      <OrderSection foodLabels={foodLabels} />
    </div>
  );
};
