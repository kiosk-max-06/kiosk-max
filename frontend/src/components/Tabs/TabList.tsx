import React from "react";
import { ITabListProps } from "../../types/Tabs.ts";
import styles from "./TabList.module.css";

function TabList({
  categoryNames,
  activeTabIdx,
  setActiveTabIdx,
}: ITabListProps) {
  return (
    <nav className={styles.tab_list}>
      <ul>
        {categoryNames.map((name, index) => (
          <li key={name} data-name={name}>
            <button
              type="button"
              data-active={index === activeTabIdx}
              onClick={() => {
                setActiveTabIdx(index);
              }}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TabList;
