import React, { useState, useEffect, useRef, FormEvent } from "react";
import { ActiveModal } from "../../types/contants.ts";
import { ActiveModalState, CartItemData } from "../../App.tsx";
import styles from "./Cart.module.css";

type CartProps = {
  cart: CartItemData[];
  setCart: (cart: CartItemData[]) => void;
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function Cart({ cart, setCart, setActiveModal }: CartProps) {
  const [remainingTime, setRemainingTime] = useState(300);

  const prevNumItems = useRef<number>(cart ? cart.length : 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 1);
      if (remainingTime === 1) {
        setCart([]);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      if (!cart || prevNumItems.current !== cart.length) {
        prevNumItems.current = cart ? cart.length : 0;
        setRemainingTime(300);
      }
    };
  }, [cart, setCart, remainingTime]);

  function discardCart() {
    setCart([]);
  }

  function proceedToCheckout(e: FormEvent) {
    e.preventDefault();
    if (cart.length <= 0) return;
    setActiveModal({ name: ActiveModal.PAYMENT });
  }

  return (
    <article className={styles.cart} data-active={cart ? "true" : "false"}>
      <h2 className="blind">카트</h2>
      <form onSubmit={proceedToCheckout}>
        <input
          type="hidden"
          id="menuList"
          name="menuList"
          value={JSON.stringify(cart)}
        />
        <ul>
          {cart.map((cartItem, index) => (
            <CartItem
              key={Symbol(index).toString()}
              {...{ cartItem, cart, setCart }}
            />
          ))}
        </ul>
        <div className={styles.control}>
          <button
            className={styles.cancel_btn}
            type="button"
            onClick={discardCart}>
            전체취소
          </button>
          <button className={styles.pay_btn} type="submit">
            결제하기
          </button>
          <p className="timer">{(remainingTime / 10).toFixed()}초 남음</p>
        </div>
      </form>
    </article>
  );
}

type CartItemProps = {
  cartItem: CartItemData;
  cart: CartItemData[];
  setCart: (cart: CartItemData[]) => void;
};

function CartItem({ cartItem, cart, setCart }: CartItemProps) {
  const { name, count, price, image } = cartItem;

  return (
    <li className={styles.cart_item} data-count={count}>
      <button
        type="button"
        className={styles.cancel}
        onClick={() => setCart(cart.filter((item) => item !== cartItem))}>
        ✕
      </button>
      <figure>
        <img src={image} alt="" />
        <figcaption className="blind">{name}</figcaption>
      </figure>
      <dl>
        <dt className="blind">이름:</dt>
        <dd>{name}</dd>

        <dt className="blind">가격:</dt>
        <dd>{price}</dd>
      </dl>
    </li>
  );
}

export default Cart;
