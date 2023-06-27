import React, { useState, useEffect, useRef, FormEvent } from "react";
import { IController, IMenu } from "../../types/Modal.ts";
import styles from "./Cart.module.css";
import { EActiveModal } from "../../constants/Modal.ts";

function Cart({ ctrl }: { ctrl: IController }) {
  const [remTime, setRemTime] = useState(300);
  const cart = ctrl.cart.get();

  const prevNumItems = useRef<number>(cart ? cart.menuList.length : 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemTime((remTime) => remTime - 1);
      if (remTime === 1) {
        ctrl.cancel();
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      if (!cart || prevNumItems.current !== cart.menuList.length) {
        prevNumItems.current = cart ? cart.menuList.length : 0;
        setRemTime(300);
      }
    };
  }, [ctrl, cart, remTime]);

  function formSubmitHandler(e: FormEvent) {
    e.preventDefault();
    if (!cart) return;
    const { menuList } = cart!;
    ctrl.order.set({ menuList });
    ctrl.cart.clear();
    ctrl.modal.view(EActiveModal.PAYMENT);
  }

  return (
    <article
      className={styles.cart}
      id={styles.cart}
      data-active={cart ? "true" : "false"}>
      <h2 className="blind">카트</h2>
      <form onSubmit={formSubmitHandler}>
        {cart && (
          <input
            type="hidden"
            id="menuList"
            name="menuList"
            value={JSON.stringify(cart!.menuList)}
          />
        )}

        <div className={styles.cart__inner}>
          <div className={styles.cart__left}>
            {cart && (
              <ul className={styles.cart__ul}>
                {cart!.menuList.map(CartItem)}
              </ul>
            )}
          </div>
          <div className={styles.cart__right}>
            <button
              className={styles.cart__button}
              type="button"
              onClick={() => ctrl.cancel()}>
              전체취소
            </button>
            <button className={styles.cart__button} type="submit">
              결제하기
            </button>
            <p className="timer">{(remTime / 10).toFixed()}초 남음</p>
          </div>
        </div>
      </form>
    </article>
  );
}

function CartItem(menu: IMenu, i: number) {
  const key = Symbol(i);
  const { data, count } = menu;
  const { name, price, imgUrl } = data;

  return (
    <li key={key.toString()} className={styles.cart__li} data-count={count}>
      <figure>
        <img src={imgUrl} alt="" />
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
