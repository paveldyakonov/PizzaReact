import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const cart = localStorage.getItem("cart");
  const items = cart ? JSON.parse(cart) : [];

  if (items.length) {
    return {
      items,
      totalPrice: calcTotalPrice(items),
    };
  } else {
    return {
      items: [],
      totalPrice: 0,
    };
  }
};
