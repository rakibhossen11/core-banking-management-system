import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Main = () => {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
