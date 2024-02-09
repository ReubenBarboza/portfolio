import React from "react";
import TabList from "../TabList";
import TTD from "./FMprojects/TTD";
import LPP from "./FMprojects/LPP";
import DD from "./FMprojects/DD";

function FM() {
  return (
    <div className='flex max-w-3xl min-w-[48rem] text-secondary'>
      <TabList
        className={"min-w-[20rem] flex flex-col justify-center gap-4"}
        tabList={[
          {
            tabLabel: "Time Tracking Dashboard",
            id: "TTD",
            tabIndex: "4",
            component: <TTD key='TTD' />,
          },
          {
            tabLabel: "Lightbox Product Page",
            id: "LPP",
            tabIndex: "5",
            component: <LPP key='LPP' />,
          },
          {
            tabLabel: "Dropdown Dashboard",
            id: "DD",
            tabIndex: "6",
            component: <DD key='DD' />,
          },
        ]}
      />
    </div>
  );
}

export default FM;
