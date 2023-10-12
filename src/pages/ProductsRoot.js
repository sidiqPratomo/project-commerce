import React from "react";
import { Outlet } from "react-router-dom";
import ProductNavigation from "../component/ProductNavigation";

function ProductsRootLayout() {
  return (
    <>
      <ProductNavigation />
      <Outlet />
    </>
  );
}

export default ProductsRootLayout;
