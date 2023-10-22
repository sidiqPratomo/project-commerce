import React from "react";
import ProductForm from "../component/ProductForm";
import { json, redirect } from "react-router-dom";

function NewProductPage() {
  return <ProductForm />;
}

export default NewProductPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const productFormData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    id: data.get("id"),
  };

  const response = await fetch("https://website-commerce-default-rtdb.firebaseio.com/products/items.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productFormData),
  });

  if (!response.ok) {
    throw json({ message: "cannot submit the product" }, { status: 500 });
  }
  return redirect("/products");
}
