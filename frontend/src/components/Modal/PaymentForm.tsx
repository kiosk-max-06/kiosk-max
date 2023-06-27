import React, { useState, FormEvent } from "react";
import { IFormProps } from "../../types/Modal.ts";
import { EActiveModal, EPaymentType } from "../../constants/Modal.ts";

function PaymentForm({ ctrl }: IFormProps) {
  const [payment, setPayment] = useState<EPaymentType | undefined>();

  function formSubmitHandler(e: FormEvent) {
    e.preventDefault();
    const order = ctrl.order.get();
    order && ctrl.order.set({ ...order, payment });
    if (payment === EPaymentType.CASH) {
      ctrl.modal.view(EActiveModal.CASH);
      return;
    }
    ctrl.order.request();
  }
  function buttonClickHandler(e: FormEvent) {
    const button = e.target as HTMLButtonElement;
    const payment = button.value as EPaymentType;
    setPayment(payment);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="row">
        <span>💳</span>
        <button type="submit" value="credit" onClick={buttonClickHandler}>
          카드결제
        </button>
      </div>
      <div className="row">
        <span>💵</span>
        <button type="submit" value="cash" onClick={buttonClickHandler}>
          현금결제
        </button>
      </div>
    </form>
  );
}

export default PaymentForm;
