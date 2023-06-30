import React, { FormEvent } from "react";
import { ActiveModal } from "../../types/contants.ts";
import { CartItemData, ActiveModalState, ReceiptData } from "../../App.tsx";
import { sendOrderRequest } from "../../api/index.ts";
import { calcCartTotalAmount } from "../../utils/index.ts";
import styles from "./PaymentForm.module.css";

export type PaymentDetails = {
  paymentType: "card" | "cash";
  totalAmount: number;
  receivedAmount: number;
};

type PaymentFormProps = {
  cart: CartItemData[];
  setCart: (cart: CartItemData[]) => void;
  setActiveModal: (activeModalState: ActiveModalState) => void;
  setReceipt: (receiptData: ReceiptData) => void;
  setIsLoading: (isLoading: boolean) => void;
};

function PaymentForm({
  cart,
  setCart,
  setActiveModal,
  setReceipt,
  setIsLoading,
}: PaymentFormProps) {
  async function payByCard(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);

    const totalAmount = calcCartTotalAmount(cart);

    const paymentDetails: PaymentDetails = {
      paymentType: "card",
      totalAmount,
      receivedAmount: totalAmount,
    };
    const orderResponse = await sendOrderRequest(paymentDetails, cart);

    setActiveModal({ name: ActiveModal.NONE });
    setCart([]);
    setTimeout(() => setIsLoading(false), 3000);
    setReceipt(orderResponse);
  }

  function openCashFormModal() {
    setActiveModal({ name: ActiveModal.CASH });
  }

  return (
    <form className={styles.payment} onSubmit={payByCard}>
      <div className="row">
        <span>💳</span>
        <button type="submit" value="credit">
          카드결제
        </button>
      </div>
      <div className="row">
        <span>💵</span>
        <button type="button" value="cash" onClick={openCashFormModal}>
          현금결제
        </button>
      </div>
    </form>
  );
}

export default PaymentForm;
