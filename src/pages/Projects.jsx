import React, { useState } from "react";
import { Link } from "react-router-dom";
import KBL from "../components/projects/KBL";
import AAA from "../components/projects/AAA";
import FM from "../components/projects/FM";
import TabList from "../components/TabList";

function Projects() {
  // const [active, setActive] = useState("KBL");

  // function handleChildClick(e) {
  //   if (e.target.tagName === "LI") {
  //     setActive(e.target.id);
  //   }
  // }

  // function handleTabNavigation(e) {
  //   if (e.target.tagName === "LI" && e.code === "Enter") {
  //     setActive(e.target.id);
  //   }
  // }

  return (
    <div className='p-4 font-josefin bg-[#2F2048] min-h-screen flex flex-col justify-center items-center'>
      {/* <div className='flex max-w-3xl min-w-[48rem] text-secondary'>
        <ul
          className='min-w-[20rem] flex flex-col justify-center gap-4'
          onClick={(e) => {
            handleChildClick(e);
          }}
          onKeyDown={(e) => handleTabNavigation(e)}
        >
          <li
            id='KBL'
            tabIndex={1}
            className={
              active === "KBL"
                ? "text-primary cursor-pointer"
                : "cursor-pointer"
            }
          >
            Kirloskar Brothers Limited.
          </li>
          <li
            tabIndex={2}
            id='AAA'
            className={
              active === "AAA"
                ? "text-primary cursor-pointer"
                : "cursor-pointer"
            }
          >
            Ask And Answer
          </li>
          <li
            tabIndex={3}
            id='FM'
            className={
              active === "FM" ? "text-primary cursor-pointer" : "cursor-pointer"
            }
          >
            Frontend Mentor Practice Projects
          </li>
        </ul>
        <div className='w-full'>
          <div className={active === "KBL" ? "block" : "hidden"}>
            <KBL />
          </div>

          <div className={active === "AAA" ? "block" : "hidden"}>
            <AAA />
          </div>

          <div className={active === "FM" ? "block" : "hidden"}>
            <FM />
          </div>
        </div>
      </div> */}
      <div className='flex max-w-3xl min-w-[48rem] text-secondary'>
        <TabList
          className={"min-w-[20rem] flex flex-col justify-center gap-4"}
          tabList={[
            {
              tabLabel: "Kirloskar Brothers Limited.",
              id: "KBL",
              tabIndex: "1",
              component: <KBL key='KBL' />,
            },
            {
              tabLabel: "Ask And Answer",
              id: "AAA",
              tabIndex: "2",
              component: <AAA key='AAA' />,
            },
            {
              tabLabel: "Frontend Mentor Practice Projects",
              id: "FM",
              tabIndex: "3",
              component: <FM key='FM' />,
            },
          ]}
        />
      </div>

      <Link tabIndex={10} className='text-secondary relative top-12' to='/'>
        Back
      </Link>
    </div>
  );
}

export default Projects;
