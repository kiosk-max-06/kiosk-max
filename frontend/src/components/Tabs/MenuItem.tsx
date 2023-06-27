import React from "react";
import { IMenuItemProps } from "../../types/Tabs.ts";
import styles from "./MenuItem.module.css";
import { EActiveModal } from "../../constants/Modal.ts";

function MenuItem({ data, ctrl }: IMenuItemProps) {
  const { name, price, imgUrl } = data;
  return (
    <li className={styles.card}>
      <figure>
        {/* <img src={imgUrl} alt="" /> */}
        <img
          src="https://i.namu.wiki/i/xudhD8Lo7zDtJ_7rpN1BWT7f-fWIYDczKlqgeFgrr5e_QTtAj3ENcFaTHbB41cNbh4xbP7LqDsrehVqc9ZkyAg.webp"
          alt=""
        />
        <figcaption className="blind">사진 대체텍스트</figcaption>
      </figure>
      <dl>
        <dt className="blind">이름:</dt>
        <dd data-label="이름">{name}</dd>

        <dt className="blind">가격:</dt>
        <dd data-label="가격">
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
