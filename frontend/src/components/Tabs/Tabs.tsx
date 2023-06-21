import React, { useState } from "react";
import TabList from "./TabList.tsx";
import Panel from "./Panel.tsx";
import styles from "./Tabs.module.css";
import { ICategories, TCategoryNameList } from "../../types/Tabs.ts";

function Tabs({ data }: { data: ICategories }) {
  const categoryNames = getCategoryNames(data);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <div className={styles.tabs}>
      <TabList {...{ categoryNames, activeTabIdx, setActiveTabIdx }} />

      <Panel menuList={data[activeTabIdx].menuList} />
    </div>
  );
}

function getCategoryNames(data: ICategories): TCategoryNameList {
  return data.map((category) => category.name);
}

export default Tabs;
