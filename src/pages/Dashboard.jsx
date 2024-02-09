import React from "react";
import Summary from "./Summary";
import NavList from "../components/NavList";

function Dashboard() {
  return (
    <div className='max-w-4xl'>
      <Summary />
      <NavList />
    </div>
  );
}

export default Dashboard;
