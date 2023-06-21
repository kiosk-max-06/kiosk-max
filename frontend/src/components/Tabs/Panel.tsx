import React from "react";
import MenuList from "./MenuList.tsx";
import styles from "./Panel.module.css";
import { IPanelProps } from "../../types/Tabs.ts";

function Panel({ menuList }: IPanelProps) {
  return (
    <main id={styles.panel} className={styles.panel_coffee}>
      <h1 className="blind">메인영역</h1>
      <div className={styles.panel__inner}>
        <MenuList menuList={menuList} />
      </div>
    </main>
  );
}

export default Panel;
