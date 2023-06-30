import React from "react";
import styles from "./Modal.module.css";
import { ActiveModalState } from "../../App.tsx";
import { ActiveModal } from "../../types/contants.ts";

type ModalProps = {
  children: React.ReactNode;
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function Modal({ children, setActiveModal }: ModalProps) {
  return (
    <dialog className={styles.modal} open>
      <button
        type="button"
        className={styles.dimmed}
        onClick={() => {
          setActiveModal({ name: ActiveModal.NONE });
        }}>
        <span className="blind">닫기</span>
      </button>
      <div className={styles.inner}>{children}</div>
    </dialog>
  );
}

export default Modal;
