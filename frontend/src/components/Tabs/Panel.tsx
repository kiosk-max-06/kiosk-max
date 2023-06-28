import React from "react";
import { IPanelProps } from "../../types/Tabs.ts";
import MenuList from "./MenuList.tsx";
import styles from "./Panel.module.css";

function Panel({ menuList, ctrl }: IPanelProps) {
  return (
    <main className={styles.panel}>
      <h1 className="blind">메인영역</h1>
      <div>
        <MenuList menuList={menuList} ctrl={ctrl} />
      </div>
    </main>
  );
}

export default Panel;
