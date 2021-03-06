import { IDiscount } from "../Interfaces/IDiscount";
import { IOrderState } from "../Store/OrderBundle";

export function totalBeforeDiscounts(order: IOrderState): number {
  return Object.values(order).reduce((acc, val) => {
    return (acc += val.subtotal);
  }, 0);
}

export function getDiscounts(order: IOrderState): ReadonlyArray<IDiscount> {
  const butterDiscount = order.butter.subtotal / 3;
  const cheeseDiscount =
    Math.floor(order.cheese.quantity / 2) * order.cheese.price;
  const soupDiscount =
    order.bread.quantity <= order.soup.quantity
      ? order.bread.subtotal / 2
      : (order.bread.price / 2) * order.soup.quantity;

  return [
    { type: "butter discount", discount: butterDiscount },
    { type: "cheese discount", discount: cheeseDiscount },
    { type: "bread discount", discount: soupDiscount },
  ];
}

export const poundify = (num: number) => `£${(num / 100).toFixed(2)}`;

export const capitalise = (str: string) => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
