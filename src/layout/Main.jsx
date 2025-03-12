import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="w-full">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
