import { FoodItem } from "../Enums/FoodItems";
import { defaultState } from "../Interfaces/__mocks__/defaultState";
import orderReducer, {
  actionCreators,
  getInitialOrderState,
  IAddToCartAction,
  IClearItemAction,
  IOrderState,
} from "./OrderBundle";

describe("OrderBundle tests", () => {
  test("getInitialState returns correct initial state", () => {
    // Arrange
    const expectedState: IOrderState = defaultState;

    // Act
    const state: IOrderState = getInitialOrderState();

    // Assert
    expect(state).toEqual(expectedState);
  });

  test.each([1, 2, 13, 50, 0, 99])(
    "OrderBundle processes ADD_TO_CART as expected with number %s",
    (num: number) => {
      // Arrange
      const expectedState: IOrderState = {
        ...defaultState,
        bread: {
          ...defaultState.bread,
          quantity: num,
          subtotal: defaultState.bread.price * num,
        },
      };

      const action: IAddToCartAction = actionCreators.addToCart(
        FoodItem.bread,
        num
      );

      // Act
      const newState: IOrderState = orderReducer(defaultState, action);

      // Assert
      expect(newState).toEqual(expectedState);
    }
  );

  test("OrderBundle processes CLEAR_ITEM as expected", () => {
    // Arrange
    const initialState: IOrderState = {
      ...defaultState,
      bread: {
        ...defaultState.bread,
        quantity: 1,
        subtotal: defaultState.bread.price,
      },
    };

    const expectedState: IOrderState = {
      ...defaultState,
      bread: {
        ...defaultState.bread,
        quantity: 0,
        subtotal: 0,
      },
    };

    const action: IClearItemAction = actionCreators.clearItem(FoodItem.bread);

    // Act
    const newState: IOrderState = orderReducer(initialState, action);

    // Assert
    expect(newState).toEqual(expectedState);
  });
});
