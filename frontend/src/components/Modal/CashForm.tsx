import React, { FormEvent, useState } from "react";
import { CartItemData, ActiveModalState, ReceiptData } from "../../App.tsx";
import { sendOrderRequest } from "../../api/index.ts";
import { PaymentDetails } from "./PaymentForm.tsx";
import { ActiveModal } from "../../types/contants.ts";
import { calcCartTotalAmount } from "../../utils/index.ts";
import styles from "./CashForm.module.css";

const cashOptions = [500, 1000, 5000, 10000];

type CashFormProps = {
  cart: CartItemData[];
  setCart: (cart: CartItemData[]) => void;
  setActiveModal: (activeModalState: ActiveModalState) => void;
  setReceipt: (receiptData: ReceiptData) => void;
  setIsLoading: (isLoading: boolean) => void;
};

function CashForm({
  cart,
  setCart,
  setActiveModal,
  setReceipt,
  setIsLoading,
}: CashFormProps) {
  const [receivedAmount, setReceivedAmount] = useState<number>(0);

  async function payByCash(e: FormEvent) {
    e.preventDefault();

    const totalAmount = calcCartTotalAmount(cart);

    if (receivedAmount < totalAmount) {
      alert(`${totalAmount - receivedAmount}원이 부족합니다.`);
      return;
    }

    setIsLoading(true);

    const paymentDetails: PaymentDetails = {
      paymentType: "cash",
      totalAmount,
      receivedAmount,
    };
    const orderResponse = await sendOrderRequest(paymentDetails, cart);

    setActiveModal({ name: ActiveModal.NONE });
    setCart([]);
    setTimeout(() => setIsLoading(false), 3000);
    setReceipt(orderResponse);
  }

  return (
    <form className={styles.cash} onSubmit={payByCash}>
      <input
        className="blind"
        type="number"
        name="amount"
        id="receivedAmount"
        value={receivedAmount}
        onChange={() => setReceivedAmount(receivedAmount)}
      />
      <ul>
        {cashOptions.map((cashOption) => (
          <li key={cashOption}>
            <button
              type="button"
              onClick={() => setReceivedAmount(receivedAmount + cashOption)}>
              {cashOption}원
            </button>
          </li>
        ))}
      </ul>
      <dl>
        <dt>주문금액:</dt>
        <dd>{calcCartTotalAmount(cart)}</dd>

        <dt>투입금액:</dt>
        <dd>
          <output>{receivedAmount}</output>
        </dd>
      </dl>
      <button type="submit">현금결제하기</button>
    </form>
  );
}

export default CashForm;
