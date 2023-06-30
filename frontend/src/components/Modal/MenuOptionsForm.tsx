import React, { useState } from "react";
import styles from "./MenuOptionForm.module.css";
import { ActiveModal, Size, Temperature } from "../../types/contants.ts";
import { MenuItem, CartItemData, ActiveModalState } from "../../App.tsx";

type MenuOptionsFormProps = {
  menuItem: MenuItem;
  cart: CartItemData[];
  setCart: (cart: CartItemData[]) => void;
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function MenuOptionsForm({
  menuItem,
  cart,
  setCart,
  setActiveModal,
}: MenuOptionsFormProps) {
  const [count, setCount] = useState(1);

  function isValidCount(count: number): boolean {
    return count > 0 && count < 100;
  }

  function countClickHandler(action: "increment" | "decrement") {
    setCount((count) => {
      switch (action) {
        case "increment":
          return isValidCount(count + 1) ? count + 1 : count;
        case "decrement":
          return isValidCount(count - 1) ? count - 1 : count;
        default:
          return count;
      }
    });
  }

  function addNewCartItem(evt: React.FormEvent): void {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData);
    const { size, temperature } = formEntries as {
      size: Size;
      temperature: Temperature;
    };

    const newCartItemData: CartItemData = {
      name: menuItem.name,
      count,
      options: [size, temperature],
      price: menuItem.price,
      image: menuItem.image,
    };

    setCart([...cart, newCartItemData]);
    setActiveModal({ name: ActiveModal.NONE });
  }

  return (
    <form className={styles.form} onSubmit={addNewCartItem}>
      <figure>
        <img src={menuItem.image} alt="" />
        <figcaption className="blind">{menuItem.name}</figcaption>
      </figure>
      <div className={styles.info}>
        <fieldset>
          <label htmlFor="small">
            <input
              className="blind"
              type="radio"
              name="size"
              value="small"
              id="small"
              required
            />
            <span className={styles.bg}>배경색</span>
            <span>small</span>
          </label>
          <label htmlFor="large">
            <input
              className="blind"
              type="radio"
              name="size"
              value="large"
              id="large"
              required
            />
            <span className={styles.bg}>배경색</span>
            <span>large</span>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="ice">
            <input
              className="blind"
              type="radio"
              name="temperature"
              value="ice"
              id="ice"
              required
            />
            <span className={styles.bg}>배경색</span>
            <span>ice</span>
          </label>
          <label htmlFor="hot">
            <input
              className="blind"
              type="radio"
              name="temperature"
              value="hot"
              id="hot"
              required
            />
            <span className={styles.bg}>배경색</span>
            <span>hot</span>
          </label>
        </fieldset>
        <fieldset className={styles.count_field}>
          <button
            className={styles.count_button}
            type="button"
            onClick={() => countClickHandler("decrement")}>
            -
          </button>
          <input
            className={styles.count_input}
            type="number"
            name="count"
            id="count"
            max="99"
            min="1"
            value={count}
            onChange={(e) =>
              setCount(Number((e.target as HTMLInputElement).value))
            }
            onInput={(e) =>
              setCount(Number((e.target as HTMLInputElement).value))
            }
            required
          />
          <button
            className={styles.count_button}
            type="button"
            onClick={() => countClickHandler("increment")}>
            +
          </button>
        </fieldset>
        <button type="submit">담기</button>
      </div>
    </form>
  );
}

export default MenuOptionsForm;
