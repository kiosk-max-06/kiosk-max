import React from "react";
import { IPanelProps } from "../../types/Tabs.ts";
import MenuList from "./MenuList.tsx";
import styles from "./Panel.module.css";

function Panel({ menuList, categoryName, ctrl }: IPanelProps) {
  return (
    <main id={styles.panel} className={styles.panel} data-name={categoryName}>
      <h1 className="blind">메인영역</h1>
      <div className={styles.panel__inner}>
        <MenuList menuList={menuList} ctrl={ctrl} />
      </div>
    </main>
  );
}

export default Panel;
