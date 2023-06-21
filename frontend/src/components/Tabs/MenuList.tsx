import React from "react";
import styles from "./MenuList.module.css";
import MenuItem from "./MenuItem.tsx";
import { IMenuListProps } from "../../types/Tabs.ts";

function MenuList({ menuList }: IMenuListProps) {
  return (
    <ul className={styles.menu_list}>
      {menuList.map(({ name, price }) => (
        <MenuItem key={name} name={name} price={price} imgUrl="" />
      ))}
    </ul>
  );
}
export default MenuList;
