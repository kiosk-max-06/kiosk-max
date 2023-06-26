import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

function Cart({
  activeCart,
  setActiveCart,
}: {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [remTime, setRemTime] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemTime((remTime) => remTime - 1);
      if (remTime === 1) {
        setActiveCart(false);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (!activeCart) {
        setRemTime(5);
      }
    };
  }, [activeCart, remTime, setActiveCart]);

  return (
    <article
      className={styles.cart}
      id={styles.cart}
      data-active={activeCart.toString()}>
      <button type="button" onClick={() => setActiveCart(false)}>
        {activeCart.toString()}
      </button>
      <h2 className="blind">카트</h2>
      <form>
        <input
          type="hidden"
          id="menuList"
          name="menuList"
          value={JSON.stringify([{ name: "아메리카노", count: 3 }])}
        />
        <div className={styles.cart__inner}>
          <div className={styles.cart__left}>
            <ul className={styles.cart__ul}>
              <li className={styles.cart__li}>커피</li>
            </ul>
          </div>
          <div className={styles.cart__right}>
            <button className={styles.cart__button} type="button">
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
