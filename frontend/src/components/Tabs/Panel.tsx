import React from "react";
import styles from "./Panel.module.css";

function Panel() {
  return (
    <main id={styles.panel} className={styles.panel_coffee}>
      <h1 className="blind">메인영역</h1>
      <div className={styles.panel__inner}>
        <ul className={styles.panel__ul}>
          <li className={styles.panel__li}>
            <h2>아메리카노</h2>
            <span>☕</span>
            <br />
            <p>
              <strong>이름:</strong>
              아메리카노
            </p>
            <p>
              <strong>가격:</strong>
              4000
              <em className="blind">원</em>
            </p>
          </li>
          <li className={styles.panel__li}>
            <h2>아메리카노</h2>
            <span>☕</span>
            <br />
            <p>
              <strong>이름:</strong>
              아메리카노
            </p>
            <p>
              <strong>가격:</strong>
              4000
              <em className="blind">원</em>
            </p>
          </li>
          <li className={styles.panel__li}>
            <h2>아메리카노</h2>
            <span>☕</span>
            <br />
            <p>
              <strong>이름:</strong>
              아메리카노
            </p>
            <p>
              <strong>가격:</strong>
              4000
              <em className="blind">원</em>
            </p>
          </li>
          <li className={styles.panel__li}>
            <h2>아메리카노</h2>
            <span>☕</span>
            <br />
            <p>
              <strong>이름:</strong>
              아메리카노
            </p>
            <p>
              <strong>가격:</strong>
              4000
              <em className="blind">원</em>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Panel;
