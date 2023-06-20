import React from "react";
import styles from "./Tabs.module.css";

function Tabs() {
  const categories = ["커피", "라떼", "티", "쥬스", "디카페인"];

  return (
    <nav id={styles.tabs}>
      <ul className={styles.tabs__ul}>
        {categories.map((category) => (
          <li className={styles.tabs__li} key={category}>
            <button type="button" className={styles.tabs__button}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Tabs;
