import { FoodItem } from "../Enums/FoodItems";
import { IOrderState } from "../Store/OrderBundle";

interface Discount {
  type: string;
  quantity: number;
}

interface Bill {
  subTotal: number;
  discounts: ReadonlyArray<Discount>;
  total: number;
}

// const PRICES = [
//   { bread: 1.5 },
//   { milk: 0.5 },
//   { cheese: 0.9 },
//   { soup: 0.6 },
//   { butter: 1.2 },
// ]; //type?

const priceDictionary: Map<Readonly<FoodItem>, Readonly<number>> = new Map([
  [FoodItem.bread, 1.5],
  [FoodItem.milk, 0.5],
  [FoodItem.cheese, 0.9],
  [FoodItem.soup, 0.6],
  [FoodItem.butter, 1.2],
]);

export function createBill(order: IOrderState) {
  //change orders to a map?
  let res = 0;
  for (const [key, value] of Object.entries(order)) {
    const price = priceDictionary.get(FoodItem[key as keyof typeof FoodItem]);
    if (price !== undefined) {
      res += value * price;
    } else {
      console.error(`${key} does not exist in price dictionary`); //test
    }
    return res;
  }
}
