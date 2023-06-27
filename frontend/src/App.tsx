import React, { useState } from "react";

import Tabs from "./components/Tabs/Tabs.tsx";

import Cart from "./components/Cart/Cart.tsx";

import MenuAdditionForm from "./components/Modal/MenuOptionsForm.tsx";
import { ICategories } from "./types/Tabs.ts";
import { EActiveModal } from "./constants/Modal.ts";
import {
  ICart,
  IController,
  IMenu,
  IMenuOptions,
  IOrder,
} from "./types/Modal.ts";
import PaymentForm from "./components/Modal/PaymentForm.tsx";
import CashForm from "./components/Modal/CashForm.tsx";

import styled from "./App.module.css";
import "./common.css";

function App() {
  const { NONE, MENU_OPTIONS, PAYMENT, CASH } = EActiveModal;
  const [activeModal, setActiveModal] = useState<EActiveModal>();
  const [selectedMenu, setSelectedMenu] = useState<IMenu | undefined>();
  const [menuOptions, setMenuOptions] = useState<IMenuOptions | undefined>();
  const [cart, setCart] = useState<ICart | undefined>();
  const [order, setOrder] = useState<IOrder | undefined>();
  const mockData: ICategories = getMockData();
  const ctrl: IController = {
    modal: {
      get: () => activeModal,
      close: () => setActiveModal(NONE),
      view: (modal: EActiveModal) => setActiveModal(modal),
    },
    menu: {
      get: () => selectedMenu,
      select: (menu: IMenu) => setSelectedMenu(menu),
      setOptions: (menuOptions: IMenuOptions) => setMenuOptions(menuOptions),
    },
    cart: {
      get: () => cart,
      clear: () => setCart(undefined),
      addMenu: (menu: IMenu) =>
        cart
          ? setCart({ menuList: [...cart.menuList, menu] })
          : setCart({ menuList: [menu] }),
    },
    order: {
      get: () => order,
      set: (order: IOrder) => setOrder(order),
      request: () => {
        if (!order) console.log("틀린요청");
      },
    },
    cancel: () => {
      setActiveModal(NONE);
      setCart(undefined);
      setSelectedMenu(undefined);
      setMenuOptions(undefined);
    },
  };

  return (
    <div className={styled.app}>
      <Tabs data={mockData} ctrl={ctrl} />
      <Cart ctrl={ctrl} />
      {activeModal && (
        <article className="dimmed">
          <h1 className="blind">배경을 어둡게</h1>
        </article>
      )}
      {activeModal && (
        <dialog open className={styled.modal}>
          {activeModal !== CASH && (
            <button type="button" onClick={() => ctrl.cancel()}>
              X
            </button>
          )}
          {activeModal === MENU_OPTIONS && <MenuAdditionForm ctrl={ctrl} />}
          {activeModal === PAYMENT && <PaymentForm ctrl={ctrl} />}
          {activeModal === CASH && <CashForm ctrl={ctrl} />}
        </dialog>
      )}
    </div>
  );
}

function getMockData(): ICategories {
  return [
    {
      id: 1,
      name: "커피",
      menuList: [
        {
          name: "아메리카노",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "콜드브루",
          price: 4500,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 2,
      name: "라떼",
      menuList: [
        {
          name: "카페라떼",
          price: 5000,
          imgUrl: "#",
        },
        {
          name: "바닐라라떼",
          price: 5500,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 3,
      name: "티",
      menuList: [
        {
          name: "녹차",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "우롱차",
          price: 4000,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 3,
      name: "쥬스",
      menuList: [
        {
          name: "오렌지",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "포도",
          price: 4000,
          imgUrl: "#",
        },
      ],
    },
    {
      id: 4,
      name: "디카페인",
      menuList: [
        {
          name: "디카페인 박카스",
          price: 4000,
          imgUrl: "#",
        },
        {
          name: "디카페인 아메리카노",
          price: 4000,
          imgUrl: "#",
        },
      ],
    },
  ];
}

export default App;
