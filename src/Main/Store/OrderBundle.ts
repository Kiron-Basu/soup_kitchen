import { FoodItem } from "../Enums/FoodItems";

// Action Types
export enum ActionTypes {
  ADD_ITEM = "ORDER_ADD_ITEM",
  CLEAR_ITEM = "ORDER_CLEAR_ITEM",
  REMOVE_ITEM = "ORDER_REMOVE_ITEM",
  ADD_TO_CART = "ADD_TO_CART",
}

//Action Interfaces
export interface IAddItemAction {
  type: ActionTypes.ADD_ITEM;
  item: FoodItem;
}

export interface IClearItemAction {
  type: ActionTypes.CLEAR_ITEM;
  item: FoodItem;
}

export interface IRemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  item: FoodItem;
}

export interface IAddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  item: FoodItem;
  quantity: number;
}

// Consolidate Action Interfaces
type Actions =
  | IAddItemAction
  | IRemoveItemAction
  | IAddToCartAction
  | IClearItemAction;

// Action Creators
export const actionCreators = {
  addItem(item: FoodItem): IAddItemAction {
    return {
      type: ActionTypes.ADD_ITEM,
      item: item,
    };
  },

  clearItem(item: FoodItem): IClearItemAction {
    return {
      type: ActionTypes.CLEAR_ITEM,
      item: item,
    };
  },

  removeItem(item: FoodItem): IRemoveItemAction {
    return {
      type: ActionTypes.REMOVE_ITEM,
      item: item,
    };
  },

  addToCart(item: FoodItem, quantity: number): IAddToCartAction {
    return {
      type: ActionTypes.ADD_TO_CART,
      item: item,
      quantity: quantity,
    };
  },
};
export interface IOrderItem {
  price: number;
  quantity: number;
  subtotal: number;
}
// Shape of store
export interface IOrderState {
  bread: IOrderItem;
  cheese: IOrderItem;
  milk: IOrderItem;
  butter: IOrderItem;
  soup: IOrderItem;
}

// Default store
export function getInitialOrderState(): Readonly<IOrderState> {
  return {
    bread: { price: 110, quantity: 0, subtotal: 0 },
    cheese: { price: 90, quantity: 0, subtotal: 0 },
    milk: { price: 50, quantity: 0, subtotal: 0 },
    butter: { price: 120, quantity: 0, subtotal: 0 },
    soup: { price: 60, quantity: 0, subtotal: 0 },
  };
}

function processAddToCart(
  state: IOrderState,
  action: IAddToCartAction
): IOrderState {
  return {
    ...state,
    [action.item]: {
      ...state[action.item],
      quantity: action.quantity,
      subtotal: action.quantity * state[action.item].price,
    },
  };
}

function processClearItem(
  state: IOrderState,
  action: IClearItemAction
): IOrderState {
  return {
    ...state,
    [action.item]: {
      ...state[action.item],
      quantity: 0,
      subtotal: 0,
    },
  };
}

// Reducer
export default function orderReducer(
  state: IOrderState = getInitialOrderState(),
  action: Actions
): IOrderState {
  console.log("@@@ in reducer", action);

  switch (action.type) {
    // case ActionTypes.ADD_ITEM:
    //   return processAddItem(state, action);
    // case ActionTypes.REMOVE_ITEM:
    //   return processRemoveItem(state, action);
    case ActionTypes.ADD_TO_CART:
      return processAddToCart(state, action);
    case ActionTypes.CLEAR_ITEM:
      return processClearItem(state, action);
    default:
      return state;
  }
}
