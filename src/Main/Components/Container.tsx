import React from "react";

import { 
  getInitialOrderState, 
  IOrderState 
} from "../Store/OrderBundle";
import { ButtonAppBar } from "./AppBar";
import { MenuSection } from "./MenuSection";
import "../Styles/MenuSection.scss";
import "../Styles/Container.scss";

export const Container = () => {
  const defaultState: IOrderState = getInitialOrderState();
  const foodLabels: ReadonlyArray<string> = Object.keys(defaultState);
  const ref = React.createRef();
  return (
    <div className="container">
      <ButtonAppBar ref={ref} />
      <span className="container__image"></span>
      <MenuSection foodLabels={foodLabels} />
    </div>
  );
};
