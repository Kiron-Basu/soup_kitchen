import { FoodItem } from "../Enums/FoodItems";

// Action Types
export enum ActionTypes {
  ADD_ITEM = "ORDER_ADD_ITEM",
  REMOVE_ITEM = "ORDER_REMOVE_ITEM",
}

//Action Interfaces
export interface IAddItemAction {
  type: ActionTypes.ADD_ITEM;
  item: FoodItem;
}

export interface IRemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  item: FoodItem;
}

// Consolidate Action Interfaces
type Actions = IAddItemAction | IRemoveItemAction;

// Action Creators
export const actionCreators = {
  addItem(item: FoodItem): IAddItemAction {
    return {
      type: ActionTypes.ADD_ITEM,
      item: item,
    };
  },

  removeItem(item: FoodItem): IRemoveItemAction {
    return {
      type: ActionTypes.REMOVE_ITEM,
      item: item,
    };
  },
};

// Shape of store
export interface IOrderState {
  bread: number;
  cheese: number;
  milk: number;
  butter: number;
  soup: number;
}

// Default store
export function getInitialOrderState(): Readonly<IOrderState> {
  return {
    bread: 0,
    cheese: 0,
    milk: 0,
    butter: 0,
    soup: 0,
  };
}

// Subreducers

function processAddItem(
  state: IOrderState,
  action: IAddItemAction
): IOrderState {
  console.log("@@@ processAddItem");

  return {
    ...state,
    [action.item]: state[action.item] + 1, //check if there's a better way to do
  };
}

function processRemoveItem(
  state: IOrderState,
  action: IRemoveItemAction
): IOrderState {
  return {
    ...state,
    [action.item]: state[action.item] - 1, //check if there's a better way to do
  };
}

// Reducer
export default function orderReducer(
  state: IOrderState = getInitialOrderState(),
  action: Actions
): IOrderState {
  console.log("@@@ in reducer", action);

  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return processAddItem(state, action);
    case ActionTypes.REMOVE_ITEM:
      return processRemoveItem(state, action);
    default:
      return state;
  }
}
