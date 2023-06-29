import React, { useState } from "react";
import EWorkflow from "./constants/EWorkflow.ts";
import getMockData from "./utils/getMockData.ts";
import TCategory from "./types/TCategory.ts";
import Tabs from "./components/Tabs.tsx";
import TMenu from "./types/TMenu.ts";
import "./reset.css";
import "./common.css";
import styles from "./App.module.css";

const { NONE, MENU_OPTIONS, PAYMENT, AMOUNT } = EWorkflow;

function App() {
  const [workflow, setWorkflow] = useState<EWorkflow>(NONE);

  const categories: TCategory[] = getMockData();

  const tabNames = categoriesToTabItems(categories);
  const tabChildrenMap = tabNamesToTabChildrenMap(tabNames);
  const panelChildrenMap = categoriesToPanelChildrenMap(categories);
  return (
    <div className={styles.container}>
      <Tabs
        tabNames={tabNames}
        tabChildrenMap={tabChildrenMap}
        panelChildrenMap={panelChildrenMap}
      />
    </div>
  );
}

function tabNamesToTabChildrenMap(tabNames: string[]) {
  const map: { [key: string]: JSX.Element } = {};
  tabNames.forEach((tabName) => {
    Object.assign(map, {
      [tabName]: <span className={styles.tab}>{tabName}</span>,
    });
  });
  return map;
}

function categoriesToTabItems(categories: TCategory[]) {
  return categories.map((category) => category.name);
}

function categoriesToPanelChildrenMap(categories: TCategory[]) {
  const map: { [key: string]: JSX.Element } = {};
  categories.forEach(({ name, menus }) => {
    Object.assign(map, { [name]: <MenuList menus={menus} /> });
  });
  return map;
}

function MenuList({ menus }: { menus: TMenu[] }) {
  return (
    <ul className={styles.menulist}>
      {menus.map((menu) => (
        <Menu key={menu.name} menu={menu} />
      ))}
    </ul>
  );
}

function Menu({ menu }: { menu: TMenu }) {
  const { name, price, image } = menu;
  return (
    <li className={styles.card}>
      <figure>
        <img src={image} alt="" />
        <figcaption className="blind">{name}</figcaption>
      </figure>
      <dl>
        <dt className="blind">이름</dt>
        <dd>{name}</dd>

        <dt className="blind">가격</dt>
        <dd>{price}</dd>
      </dl>
      <button type="button">{menu.name} 추가하기</button>
    </li>
  );
}

export default App;
