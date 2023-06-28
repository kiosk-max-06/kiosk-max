import React from "react";
import { IMenuItemProps } from "../../types/Tabs.ts";
import styles from "./MenuItem.module.css";
import { EActiveModal } from "../../constants/Modal.ts";

function MenuItem({ data, ctrl }: IMenuItemProps) {
  const { name, price, imgUrl } = data;
  return (
    <li className={styles.card}>
      <figure>
        <img src={imgUrl} alt="" />
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
      <input
        type="button"
        onClick={(e) => {
          ctrl.menu.select({ data });
          ctrl.modal.view(EActiveModal.MENU_OPTIONS);
        }}
      />
    </li>
  );
}
export default MenuItem;
