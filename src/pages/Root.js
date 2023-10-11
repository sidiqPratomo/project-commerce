import React from "react";
import MainNavigation from "../component/MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
