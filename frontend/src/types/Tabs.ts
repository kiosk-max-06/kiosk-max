import { IController } from "./Modal.ts";

export interface ITabListProps {
  categoryNames: string[];
  activeTabIdx: number;
  setActiveTabIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPanelProps {
  menuList: TMenuList;
  ctrl: IController;
}

export interface IMenuData {
  name: string;
  price: number;
  imgUrl: string;
}

export type TMenuList = IMenuData[];

export interface IMenuListProps {
  menuList: TMenuList;
  ctrl: IController;
}

export interface IMenuItemProps {
  data: IMenuData;
  ctrl: IController;
}

export interface ICategory {
  id: number;
  name: string;
  menuList: TMenuList;
}

export type ICategories = ICategory[];

export type TCategoryNameList = string[];

export interface ITabsProps {
  data: ICategories;
  ctrl: IController;
}
