import React from "react";
import { ActiveModal } from "../../types/contants.ts";
import { ActiveModalState, MenuItem as MenuItemType } from "../../App.tsx";
import styles from "./MenuItem.module.css";

type MenuItemProps = {
  menuData: MenuItemType;
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function MenuItem({ menuData, setActiveModal }: MenuItemProps) {
  const { name, price, image } = menuData;

  function openMenuOptionsModal() {
    setActiveModal({
      name: ActiveModal.MENU_OPTIONS,
      content: menuData,
    });
  }

  return (
    <li className={styles.card}>
      <figure>
        <img src={image} alt="" />
        <figcaption className="blind">사진 대체텍스트</figcaption>
      </figure>
      <dl>
        <dt className="blind">이름:</dt>
        <dd>{name}</dd>

        <dt className="blind">가격:</dt>
        <dd>
          {price}
          <em>원</em>
        </dd>
      </dl>
      <input type="button" onClick={openMenuOptionsModal} />
    </li>
  );
}
export default MenuItem;
