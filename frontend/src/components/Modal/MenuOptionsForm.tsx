import React, { useState } from "react";
import styles from "./MenuOptionForm.module.css";
import { IController, IMenuOptions } from "../../types/Modal.ts";
import { EActiveModal, ESize, ETemperature } from "../../constants/Modal.ts";

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
      <div className={styles.inner}>
        <div className={styles.left}>
          {menu && (
            <figure className={styles.form__img}>
              <img src={menu.data.imgUrl} alt="" />
              <figcaption className="blind">커피</figcaption>
            </figure>
          )}
        </div>
        <div className={styles.right}>
          <fieldset className={styles.form__field}>
            <label className={styles.form__size_checker} htmlFor="large">
              <input
                className="blind"
                type="radio"
                name="size"
                value="large"
                id="large"
                required
              />
              <article className={styles.bg}>
                <h3 className="blind">버튼배경</h3>
              </article>
              <span>큰거</span>
            </label>
            <label className={styles.form__size_checker} htmlFor="small">
              <input
                className="blind"
                type="radio"
                name="size"
                value="small"
                id="small"
                required
              />
              <article className={styles.bg}>
                <h3 className="blind">버튼배경</h3>
              </article>
              <span>작은거</span>
            </label>
          </fieldset>
          <fieldset className={styles.form__field}>
            <label className={styles.form__temperature_checker} htmlFor="hot">
              <input
                className="blind"
                type="radio"
                name="temperature"
                value="hot"
                id="hot"
                required
              />
              <article className={styles.bg}>
                <h3 className="blind">버튼배경</h3>
              </article>
              <span> 뜨거운 것</span>
            </label>
            <label className={styles.form__temperature_checker} htmlFor="ice">
              <input
                className="blind"
                type="radio"
                name="temperature"
                value="ice"
                id="ice"
                required
              />
              <article className={styles.bg}>
                <h3 className="blind">버튼배경</h3>
              </article>
              <span>차가운 것</span>
            </label>
          </fieldset>
          <fieldset className={styles.form__field} id={styles.count_field}>
            <button
              className={styles.count_button}
              type="button"
              onClick={() => clickHandler("decrement")}>
              -
            </button>
            <div className={styles.count_window}>
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
            </div>
            <button
              className={styles.count_button}
              type="button"
              onClick={() => clickHandler("increment")}>
              +
            </button>
          </fieldset>
        </div>
      </div>
      <button className={styles.form__submit} type="submit">
        담기
      </button>
    </form>
  );
}

export default MenuOptionsForm;
