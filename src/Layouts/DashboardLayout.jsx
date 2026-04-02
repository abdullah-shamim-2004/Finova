import React, { Children } from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
