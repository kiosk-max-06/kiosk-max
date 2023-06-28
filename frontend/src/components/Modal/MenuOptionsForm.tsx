import React, { useState } from "react";
import styles from "./MenuOptionForm.module.css";
import { IController, IMenuOptions } from "../../types/Modal.ts";
import { ESize, ETemperature } from "../../constants/Modal.ts";

function MenuOptionsForm({ ctrl }: { ctrl: IController }) {
  const [count, setCount] = useState(1);

  function clickHandler(action: "increment" | "decrement") {
    if (action === "increment") {
      const nextCount = count + 1;
      if (nextCount < 100) {
        setCount(nextCount);
      }
    } else if (action === "decrement") {
      const nextCount = count - 1;
      if (nextCount > 0) {
        setCount(nextCount);
      }
    }
  }

  function formSubmitHandler(e: React.FormEvent): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const temp = Object.fromEntries(formData);
    const menuOptions: IMenuOptions = {
      size: temp.size as ESize,
      temperature: temp.temperature as ETemperature,
      count: Number(temp.count),
    };
    ctrl.menu.setOptions(menuOptions);
    const menu = ctrl.menu.get();
    if (menu) ctrl.cart.addMenu(menu);
    ctrl.modal.close();
  }

  const menu = ctrl.menu.get();

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      {menu && (
        <figure>
          <img src={menu.data.imgUrl} alt="" />
          <figcaption className="blind">커피</figcaption>
        </figure>
      )}
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
            <span>ICE</span>
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
            <span>HOT</span>
          </label>
        </fieldset>
        <fieldset className={styles.count_field}>
          <button
            className={styles.count_button}
            type="button"
            onClick={() => clickHandler("decrement")}>
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
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              if (input.value && input.value !== "0") {
                setCount(Number(input.value));
              }
            }}
            required
          />
          <button
            className={styles.count_button}
            type="button"
            onClick={() => clickHandler("increment")}>
            +
          </button>
        </fieldset>
        <button type="submit">담기</button>
      </div>
    </form>
  );
}

export default MenuOptionsForm;
