import React from "react";

function Tab({ tabLabel, active, id, tabIndex }) {
  return (
    <li
      id={id}
      tabIndex={tabIndex}
      className={
        active === id ? "text-primary cursor-pointer" : "cursor-pointer"
      }
    >
      {tabLabel}
    </li>
  );
}

export default Tab;
