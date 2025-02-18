import React from "react";
import CardDash from "../components/Card/CardDash";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <CardDash />
      <CardDash />
      <CardDash />
      <CardDash />
    </div>
  );
};

export default Dashboard;
