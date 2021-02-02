import { createStore, Reducer, combineReducers, Store } from "redux";
import orderReducer, { getInitialOrderState } from "./Main/Store/OrderBundle";
import { IState } from "./Main/Store/IState";

export let store: Readonly<Store<IState>>;

export function dispatch(action: { type: string }): void {
  if (store !== undefined) {
    store.dispatch(action);
  }
}

function getReducers(): {} {
  return {
    orderState: orderReducer,
  };
}

export default function configureStore(initialState = getInitialOrderState) {
  const reducer: Reducer<{}> = combineReducers(getReducers());
  return createStore(reducer, initialState()) as Store<IState>;
}

export function setStore(setAsStore: Readonly<Store<IState>>): void {
  store = setAsStore;
}
