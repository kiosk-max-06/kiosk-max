import React, { useState } from "react";

function Modal() {
  const [count, setCount] = useState(1);

  function clickHandler(action: "increment" | "decrement") {
    if (action === "increment") {
      const nextCount = count + 1;
      if (nextCount < 99) {
        setCount(nextCount);
      }
    } else if (action === "decrement") {
      const nextCount = count - 1;
      if (nextCount > 0) {
        setCount(nextCount);
      }
    }
  }

  return (
    <dialog>
      <form>
        <figure>
          <span>☕</span>
          <figcaption className="blind">커피</figcaption>
        </figure>
        <fieldset>
          <label htmlFor="large">
            <input
              className="blind"
              type="radio"
              name="size"
              id="large"
              required
            />
            큰거
          </label>
          <label htmlFor="small">
            <input
              className="blind"
              type="radio"
              name="size"
              id="small"
              required
            />
            작은거
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="hot">
            <input
              className="blind"
              type="radio"
              name="temperature"
              id="hot"
              required
            />
            뜨거운 것
          </label>
          <label htmlFor="ice">
            <input
              className="blind"
              type="radio"
              name="temperature"
              id="ice"
              required
            />
            차가운 것
          </label>
        </fieldset>
        <fieldset>
          <button type="button" onClick={() => clickHandler("decrement")}>
            -
          </button>
          <input
            type="number"
            name="count"
            id="count"
            max="99"
            min="1"
            value={count}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              setCount(Number(input.value));
            }}
            required
          />
          <button type="button" onClick={() => clickHandler("increment")}>
            +
          </button>
        </fieldset>
        <button type="submit">담기</button>
      </form>
    </dialog>
  );
}

export default Modal;
