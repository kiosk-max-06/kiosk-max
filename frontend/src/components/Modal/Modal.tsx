import React from "react";
import MenuOptionForm from "./MenuOptionForm.tsx";
import PaymentForm from "./PaymentForm.tsx";
import CashForm from "./CashForm.tsx";
import { IModalProps } from "../../types/Modal.ts";

function Modal({ activeModal, setActiveModal }: IModalProps) {
  const modalComponents: Record<string, JSX.Element> = {
    menuOptions: <MenuOptionForm />,
    payment: <PaymentForm />,
    cash: <CashForm />,
  };

  return (
    <dialog open>
      {activeModal !== "cash" && (
        <button type="button" onClick={() => setActiveModal("none")}>
          X
        </button>
      )}
      {modalComponents[activeModal]}
    </dialog>
  );
}

export default Modal;
