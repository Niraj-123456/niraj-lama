import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="w-full grid place-items-center min-h-screen">
      <Outlet />
    </div>
  );
};

export default RootLayout;
