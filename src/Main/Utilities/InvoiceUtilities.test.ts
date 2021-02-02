import { FoodItem } from "../Enums/FoodItems";
import { IDiscount } from "../Interfaces/IDiscount";
import { defaultState } from "../Interfaces/__mocks__/defaultState";
import { IOrderState } from "../Store/OrderBundle";
import { getDiscounts, totalBeforeDiscounts } from "./InvoiceUtilities";

interface testQuantities {
  bread: number;
  cheese: number;
  soup: number;
  milk: number;
  butter: number;
}
function orderBuilder(quantities: testQuantities): IOrderState {
  let result = {};
  Object.keys(defaultState).map((key) => {
    const price: number = defaultState[key as keyof typeof FoodItem].price;
    const quantity: number = quantities[key as keyof typeof quantities];
    result = {
      ...result,
      [key]: { price, quantity: quantity, subtotal: price * quantity },
    };
  });
  return {
    ...defaultState,
    ...result,
  };
}

describe("Invoice Utilities tests", () => {
  test("totalBeforeDiscounts adds subtotals correctly", () => {
    const state: IOrderState = orderBuilder({
      bread: 3,
      milk: 0,
      cheese: 3,
      soup: 0,
      butter: 0,
    });
    const expectedTotal: number = state.bread.subtotal + state.cheese.subtotal;
    const total: number = totalBeforeDiscounts(state);

    expect(total).toEqual(expectedTotal);
  });

  test("Discounts - buy a soup and two breads, one bread should be half-price", () => {
    const state: IOrderState = orderBuilder({
      bread: 2,
      milk: 0,
      cheese: 0,
      soup: 1,
      butter: 0,
    });

    const expectedDiscount: number = state.bread.price / 2;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const breadDiscount = allDiscounts.find(
      (discount) => discount.type === "bread discount"
    )?.discount;
    expect(breadDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - two soups and three breads, two breads should be half-price", () => {
    const state: IOrderState = orderBuilder({
      bread: 2,
      milk: 0,
      cheese: 0,
      soup: 2,
      butter: 0,
    });

    const expectedDiscount: number = state.bread.price;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const breadDiscount = allDiscounts.find(
      (discount) => discount.type === "bread discount"
    )?.discount;
    expect(breadDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - 6 soups and three breads, three breads should be half-price", () => {
    const state: IOrderState = orderBuilder({
      bread: 3,
      milk: 0,
      cheese: 0,
      soup: 6,
      butter: 0,
    });

    const expectedDiscount: number = (state.bread.price / 2) * 3;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const breadDiscount = allDiscounts.find(
      (discount) => discount.type === "bread discount"
    )?.discount;
    expect(breadDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - buy three cheeses, one should be free", () => {
    const state: IOrderState = orderBuilder({
      bread: 0,
      milk: 0,
      cheese: 3,
      soup: 0,
      butter: 0,
    });

    const expectedDiscount: number = state.cheese.price;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const cheeseDiscount = allDiscounts.find(
      (discount) => discount.type === "cheese discount"
    )?.discount;
    expect(cheeseDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - buy four cheeses, two should be free", () => {
    const state: IOrderState = orderBuilder({
      bread: 0,
      milk: 0,
      cheese: 4,
      soup: 0,
      butter: 0,
    });

    const expectedDiscount: number = state.cheese.price * 2;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const cheeseDiscount = allDiscounts.find(
      (discount) => discount.type === "cheese discount"
    )?.discount;
    expect(cheeseDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - buy five cheeses with other things, two should be free", () => {
    const state: IOrderState = orderBuilder({
      bread: 2,
      milk: 1,
      cheese: 5,
      soup: 3,
      butter: 4,
    });

    const expectedDiscount: number = state.cheese.price * 2;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const cheeseDiscount = allDiscounts.find(
      (discount) => discount.type === "cheese discount"
    )?.discount;
    expect(cheeseDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - buy one butter and get a third off", () => {
    const state: IOrderState = orderBuilder({
      bread: 0,
      milk: 0,
      cheese: 0,
      soup: 0,
      butter: 1,
    });

    const expectedDiscount: number = state.butter.price / 3;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const butterDiscount = allDiscounts.find(
      (discount) => discount.type === "butter discount"
    )?.discount;
    expect(butterDiscount).toEqual(expectedDiscount);
  });

  test("Discounts - buy three butters and a mixture of other items, the discounts should be 3 thirds (one butter)", () => {
    const state: IOrderState = orderBuilder({
      bread: 2,
      milk: 4,
      cheese: 2,
      soup: 2,
      butter: 3,
    });

    const expectedDiscount: number = state.butter.price;
    const allDiscounts: ReadonlyArray<IDiscount> = getDiscounts(state);

    const butterDiscount = allDiscounts.find(
      (discount) => discount.type === "butter discount"
    )?.discount;
    expect(butterDiscount).toEqual(expectedDiscount);
  });
});
