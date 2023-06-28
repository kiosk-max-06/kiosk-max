import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  // TODO: dim background.
  return <dialog open>{children}</dialog>;
}

export default Modal;
