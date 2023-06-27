import React from "react";
import { IMenuListProps } from "../../types/Tabs.ts";
import MenuItem from "./MenuItem.tsx";
import styles from "./MenuList.module.css";

function MenuList({ menuList, ctrl }: IMenuListProps) {
  return (
    <ul className={styles.menu_list}>
      {menuList.map((props, i) => {
        const key = Symbol(i).toString();
        return <MenuItem key={key} data={props} ctrl={ctrl} />;
      })}
    </ul>
  );
}
export default MenuList;
