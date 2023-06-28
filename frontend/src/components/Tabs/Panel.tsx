import React from "react";
import MenuList from "./MenuList.tsx";
import { ActiveModalState, MenuItem } from "../../App.tsx";
import styles from "./Panel.module.css";

type PanelProps = {
  menus: MenuItem[];
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function Panel({ menus, setActiveModal }: PanelProps) {
  return (
    <main className={styles.panel}>
      <h1 className="blind">메인영역</h1>
      <div>
        <MenuList {...{ menus, setActiveModal }} />
      </div>
    </main>
  );
}

export default Panel;
