export interface IModalProps {
  activeModal: TActiveModal;
  setActiveModal: React.Dispatch<React.SetStateAction<TActiveModal>>;
}

export type TActiveModal = "cash" | "menuOptions" | "payment" | null;
