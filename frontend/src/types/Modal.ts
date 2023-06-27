import {
  EActiveModal,
  EPaymentType,
  ESize,
  ETemperature,
} from "../constants/Modal.ts";
import { IMenuData } from "./Tabs.ts";

export interface IMenu {
  data: IMenuData;
  options?: {
    size: number;
    temperature: number;
  };
  count?: number;
}

export interface ICart {
  menuList: IMenu[];
}

export interface IOrder extends ICart {
  payment?: EPaymentType;
  amount?: number;
}

export interface IMenuOptions {
  size: ESize;
  temperature: ETemperature;
  count: number;
}

export interface IMenuController {
  get: () => IMenu | undefined;
  select: (menu: IMenu) => void;
  setOptions: (options: IMenuOptions) => void;
}

export interface IModalController {
  get: () => EActiveModal | undefined;
  close: () => void;
  view: (modal: EActiveModal) => void;
}

export interface ICartController {
  get: () => ICart | undefined;
  clear: () => void;
  addMenu: (menu: IMenu) => void;
}

export interface IOrderController {
  get: () => IOrder | undefined;
  set: (order: IOrder) => void;
  request: () => void;
}

export interface IController {
  modal: IModalController;
  menu: IMenuController;
  cart: ICartController;
  order: IOrderController;
  cancel: () => void;
}

export interface IFormProps {
  ctrl: IController;
}
