import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Remaining Area */}
      <div className="h-[calc(100vh-100px)] bg-pink-100">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
