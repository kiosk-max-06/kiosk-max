import React from "react";
import styles from "./TabList.module.css";

type TabListProps = {
  categoryNames: string[];
  activeCategoryIndex: number;
  setActiveCategoryIndex: (newIndex: number) => void;
};

function TabList({
  categoryNames,
  activeCategoryIndex,
  setActiveCategoryIndex,
}: TabListProps) {
  return (
    <nav className={styles.tab_list}>
      <ul>
        {categoryNames.map((name, index) => (
          <li key={name} data-name={name}>
            <button
              type="button"
              data-active={index === activeCategoryIndex}
              onClick={() => {
                setActiveCategoryIndex(index);
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
