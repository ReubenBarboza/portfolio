import React, { useState } from "react";
import Tab from "./Tab";

function TabList({ tabList, className }) {
  const [active, setActive] = useState(tabList[0].id);

  function handleChildClick(e) {
    if (e.target.tagName === "LI") {
      setActive(e.target.id);
    }
  }

  function handleTabNavigation(e) {
    if (e.target.tagName === "LI" && e.code === "Enter") {
      setActive(e.target.id);
    }
  }

  return (
    <>
      <ul
        className={className}
        onClick={(e) => handleChildClick(e)}
        onKeyDown={(e) => handleTabNavigation(e)}
      >
        {tabList.map((tabItem) => {
          return <Tab key={tabItem.id} {...tabItem} active={active} />;
        })}
      </ul>

      {/* Content */}
      {tabList.map((tab) => {
        if (tab.id === active) {
          return tab.component;
        }

        return null;
      })}
    </>
  );
}

export default TabList;
