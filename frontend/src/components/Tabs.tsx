import React, { useState } from "react";
import styles from "./Tabs.module.css";

function Tabs<T extends string>({
  tabNames,
  tabChildrenMap,
  panelChildrenMap,
}: {
  tabNames: T[];
  tabChildrenMap: { [key in T]: JSX.Element };
  panelChildrenMap: { [key in T]: JSX.Element };
}) {
  const [activeTab, setActiveTab] = useState<T>(tabNames[0]);
  return (
    <div className={styles.tabs}>
      <ul className={styles.tab_list}>
        {tabNames.map((tab) => (
          <li key={tab}>
            <button type="button" onClick={() => setActiveTab(tab)}>
              {tabChildrenMap[tab]}
            </button>
          </li>
        ))}
      </ul>
      <article className={styles.panel}>
        <h2 className="blind">{activeTab} 패널</h2>
        {panelChildrenMap[activeTab]}
      </article>
    </div>
  );
}

export default Tabs;
