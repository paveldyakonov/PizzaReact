import { Pizza } from "@redux/slices/cart/types";

export const calcTotalPrice = (items: Pizza[]) => {
  return items.reduce((acc: number, item: Pizza) => {
    if (item.count) return acc + Number(item.price) * item.count;
    return acc + Number(item.price);
  }, 0);
};
