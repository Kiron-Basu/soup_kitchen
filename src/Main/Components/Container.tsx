import React from "react";
import { getInitialOrderState, IOrderState } from "../Store/OrderBundle"; //reinstate interface from interface folder?
import AppBar from "./AppBar";
import { MenuSection } from "./MenuSection";
import "../Styles/MenuSection.scss";

export const Container = () => {
  const defaultState: IOrderState = getInitialOrderState();
  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState); //get from store?

  return (
    <div>
      <AppBar />
      <span className="menuSection menuSection__image menuSection__image--title"></span>
      <MenuSection foodLabels={foodLabels} />
    </div>
  );
};
