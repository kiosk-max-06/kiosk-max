import React from "react";
import MenuOptionForm from "./MenuOptionForm.tsx";
import PaymentForm from "./PaymentForm.tsx";
import CashForm from "./CashForm.tsx";
import IModalProps from "../../types/Modal.ts";
import EActiveModal from "../../constants/EActiveModal.ts";

function Modal({ activeModal, setActiveModal }: IModalProps) {
  const modalComponents: Record<EActiveModal, JSX.Element | null> = {
    MENU_OPTIONS: <MenuOptionForm />,
    PAYMENT: <PaymentForm />,
    CASH: <CashForm />,
    NONE: null,
  };

  return (
    <dialog open>
      {activeModal !== "CASH" && (
        <button type="button" onClick={() => setActiveModal(EActiveModal.NONE)}>
          X
        </button>
      )}
      {modalComponents[activeModal]}
    </dialog>
  );
}

export default Modal;
