import { CartItemData } from "../App.tsx";

// eslint-disable-next-line import/prefer-default-export
export function calcCartTotalAmount(cart: CartItemData[]) {
  return cart.reduce((sum, cartItem) => {
    const { price, count } = cartItem;
    return sum + price * count;
  }, 0);
}
