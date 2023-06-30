import React, { useState } from "react";
import TabList from "./TabList.tsx";
import Panel from "./Panel.tsx";
import { ActiveModalState, MenuCategory } from "../../App.tsx";
import styles from "./Tabs.module.css";

type TabsProps = {
  menuCategories: MenuCategory[];
  setActiveModal: (activeModalState: ActiveModalState) => void;
};

function Tabs({ menuCategories, setActiveModal }: TabsProps) {
  const categoryNames = getCategoryNames(menuCategories);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <div className={styles.tabs}>
      <TabList
        {...{ categoryNames, activeCategoryIndex, setActiveCategoryIndex }}
      />
      <Panel
        {...{
          menus: menuCategories[activeCategoryIndex]?.menus,
          setActiveModal,
        }}
      />
      <p>※전 메뉴 프로틴 첨가</p>
    </div>
  );
}

function getCategoryNames(menus: MenuCategory[]): string[] {
  return menus?.map((category) => category.name);
}

export default Tabs;
