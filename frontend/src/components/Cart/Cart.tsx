import React, { useState, useEffect, FormEvent } from "react";
import { IController } from "../../types/Modal.ts";
import styles from "./Cart.module.css";
import { EActiveModal } from "../../constants/Modal.ts";

function Cart({ ctrl }: { ctrl: IController }) {
  const [remTime, setRemTime] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemTime((remTime) => remTime - 1);
      if (remTime === 1) {
        ctrl.cancel();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (!ctrl.cart.get()) {
        setRemTime(30);
      }
    };
  }, [ctrl, remTime]);

  const cart = ctrl.cart.get();

  function formSubmitHandler(e: FormEvent) {
    e.preventDefault();
    if (!cart) return;
    const { menuList } = cart;
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
            value={JSON.stringify(cart.menuList)}
          />
        )}

        <div className={styles.cart__inner}>
          <div className={styles.cart__left}>
            {cart && (
              <ul className={styles.cart__ul}>
                {cart.menuList.map((menu, i) => {
                  const key = Symbol(i);
                  const { data } = menu;
                  const { name, price, imgUrl } = data;
                  return (
                    <li key={key.toString()} className={styles.cart__li}>
                      <img src={imgUrl} alt="" />
                    </li>
                  );
                })}
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
            <p className="timer">{remTime}초 남음</p>
          </div>
        </div>
      </form>
    </article>
  );
}

export default Cart;
