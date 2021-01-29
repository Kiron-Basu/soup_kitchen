import {
  createStore,
  applyMiddleware,
  Reducer,
  combineReducers,
  Store,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import orderReducer, {
  getInitialOrderState,
  IOrderState,
} from "./Main/Store/OrderBundle";

export let store: Readonly<Store<IOrderState>>;

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
  return createStore(
    reducer,
    initialState(),
    composeWithDevTools(applyMiddleware(thunk))
  );
}
