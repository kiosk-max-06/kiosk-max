import React from "react";
import MenuItem from "./MenuItem.tsx";
import { ActiveModalState, MenuItem as MenuItemType } from "../../App.tsx";
import styles from "./MenuList.module.css";

type MenuListProps = {
  menus: MenuItemType[];
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function MenuList({ menus, setActiveModal }: MenuListProps) {
  return (
    <ul className={styles.menu_list}>
      {menus?.map((menuData, i) => {
        const key = Symbol(i).toString();
        return <MenuItem {...{ key, menuData, setActiveModal }} />;
      })}
    </ul>
  );
}

export default MenuList;
