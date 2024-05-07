import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <div className="w-full p-12 grid place-items-center place-content-center min-h-screen">
      <Outlet />
    </div>
  );
};

export default RootLayout;
