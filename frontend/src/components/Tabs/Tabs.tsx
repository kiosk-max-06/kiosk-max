import React, { useState } from "react";
import {
  ICategories,
  ITabsProps,
  TCategoryNameList,
} from "../../types/Tabs.ts";
import TabList from "./TabList.tsx";
import Panel from "./Panel.tsx";
import styles from "./Tabs.module.css";

function Tabs({ data, ctrl }: ITabsProps) {
  const categoryNames = getCategoryNames(data);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <div className={styles.tabs}>
      <TabList {...{ categoryNames, activeTabIdx, setActiveTabIdx }} />
      <Panel menuList={data[activeTabIdx].menuList} ctrl={ctrl} />
    </div>
  );
}

function getCategoryNames(data: ICategories): TCategoryNameList {
  return data.map((category) => category.name);
}

export default Tabs;
