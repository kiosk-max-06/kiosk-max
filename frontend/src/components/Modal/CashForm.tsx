import React, { FormEvent, useState } from "react";
import { IFormProps } from "../../types/Modal.ts";

const totalAmount = 10000;
const cashOptions = [500, 1000, 5000, 10000];

function CashForm({ ctrl }: IFormProps) {
  const [receivedAmount, setReceivedAmount] = useState<number>(0);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const { amount } = Object.fromEntries(formData);
    const order = ctrl.order.get();
    order && ctrl.order.set({ ...order, amount: Number(amount) });
    ctrl.order.request();
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className="blind"
        type="number"
        name="amount"
        id="receivedAmount"
        value={receivedAmount}
      />
      {cashOptions.map((cashOption) => (
        <button
          key={cashOption}
          type="button"
          onClick={() => {
            setReceivedAmount(receivedAmount + cashOption);
          }}>
          {cashOption}원
        </button>
      ))}
      <dl>
        <dt>주문금액:</dt>
        <dd>{totalAmount}</dd>

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
