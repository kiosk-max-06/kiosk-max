import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs/Tabs.tsx";
import Modal from "./components/Modal/Modal.tsx";
import MenuOptionsForm from "./components/Modal/MenuOptionsForm.tsx";
import PaymentForm from "./components/Modal/PaymentForm.tsx";
import CashForm from "./components/Modal/CashForm.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Receipt from "./components/Receipt/Receipt.tsx";
import { ActiveModal, Size, Temperature } from "./types/contants.ts";
import { fetchMenus } from "./api/index.ts";
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

export type ReceiptData = {
  orderId: number;
  menus: {
    name: string;
    count: number;
    options: string[];
  }[];
  paymentType: keyof typeof PaymentTypes;
  paymentAmount: number;
  totalAmount: number;
  change: number;
};

export enum PaymentTypes {
  cash = "현금",
  card = "카드",
}

function App() {
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [activeModal, setActiveModal] = useState<ActiveModalState>({
    name: ActiveModal.NONE,
  });
  const [cart, setCart] = useState<CartItemData[]>([]);
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getMenus() {
      const menus = await fetchMenus();
      setMenuCategories(menus);
      setIsLoading(false);
    }

    getMenus();
  }, []);

  return (
    <div className={styles.app}>
      {isLoading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <>
          <Tabs {...{ menuCategories, setActiveModal }} />

          {cart.length > 0 && <Cart {...{ cart, setCart, setActiveModal }} />}

          {activeModal.name !== ActiveModal.NONE && (
            <Modal {...{ setActiveModal }}>
              {activeModal.name !== ActiveModal.CASH && (
                <button
                  className={styles.cancel_button}
                  type="button"
                  onClick={() => setActiveModal({ name: ActiveModal.NONE })}>
                  ✕
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
                  {...{
                    cart,
                    setActiveModal,
                    setCart,
                    setReceipt,
                    setIsLoading,
                  }}
                />
              )}
              {activeModal.name === ActiveModal.CASH && (
                <CashForm
                  {...{
                    cart,
                    setActiveModal,
                    setCart,
                    setReceipt,
                    setIsLoading,
                  }}
                />
              )}
            </Modal>
          )}

          {receipt && <Receipt {...{ receipt, setReceipt }} />}
        </>
      )}
    </div>
  );
}

export default App;
