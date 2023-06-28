import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs/Tabs.tsx";
import Modal from "./components/Modal/Modal.tsx";
import MenuOptionsForm from "./components/Modal/MenuOptionsForm.tsx";
import PaymentForm from "./components/Modal/PaymentForm.tsx";
import CashForm from "./components/Modal/CashForm.tsx";
import Cart from "./components/Cart/Cart.tsx";
import { ActiveModal, Size, Temperature } from "./types/contants.ts";
import { fetchMenus, getMockData } from "./api/index.ts";
import "./common.css";
import "./reset.css";
import styles from "./App.module.css";

export type MenuCategory = {
  id: number;
  name: string;
  menus: MenuItem[];
};

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
};

export type ActiveModalState = {
  name: ActiveModal;
  content?: MenuItem;
};

export type CartItemData = {
  name: string;
  price: number;
  image: string;
  count: number;
  options: [Size, Temperature];
};

function App() {
  // const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [activeModal, setActiveModal] = useState<ActiveModalState>({
    name: ActiveModal.NONE,
  });
  const [cart, setCart] = useState<CartItemData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // initialize to true

  // async function getMenus() {
  //   const menus = await fetchMenus();
  //   setMenuCategories(menus);
  //   console.log("menuCategories", menuCategories);
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   getMenus();
  // }, []);

  const mockData = getMockData();

  return (
    <div className={styles.app}>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <Tabs {...{ menuCategories: mockData, setActiveModal }} />

          {cart.length > 0 && <Cart {...{ cart, setCart, setActiveModal }} />}

          {activeModal.name !== ActiveModal.NONE && (
            <Modal>
              {activeModal.name !== ActiveModal.CASH && (
                <button
                  className={styles.cancel_button}
                  type="button"
                  onClick={() => setActiveModal({ name: ActiveModal.NONE })}>
                  X
                </button>
              )}
              {activeModal.name === ActiveModal.MENU_OPTIONS && (
                <MenuOptionsForm
                  {...{
                    cart,
                    setCart,
                    setActiveModal,
                    menuItem: activeModal.content!,
                  }}
                />
              )}
              {activeModal.name === ActiveModal.PAYMENT && (
                <PaymentForm
                  {...{ cart, setActiveModal, setCart, setIsLoading }}
                />
              )}
              {activeModal.name === ActiveModal.CASH && (
                <CashForm
                  {...{ cart, setActiveModal, setCart, setIsLoading }}
                />
              )}
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export default App;
