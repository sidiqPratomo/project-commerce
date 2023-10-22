import React from "react";
import ProductForm from "../component/ProductForm";
import { useRouteLoaderData } from "react-router-dom";

function EditProductPage() {
  const data = useRouteLoaderData("product-detail");

  return <ProductForm product={data} />;
}

export default EditProductPage;
