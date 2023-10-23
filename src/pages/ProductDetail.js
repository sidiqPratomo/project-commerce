import React from "react";
import { Link, json, redirect, useRouteLoaderData } from "react-router-dom";
import ProductItem from "../component/ProductItem";

function ProductDetailPage() {
  const data = useRouteLoaderData("product-detail");

  return (
    <div>
      <ProductItem product={data} />
      <p>
        <Link to="..">Back</Link>
      </p>
      <p>
        <Link to="edit">Edit Product</Link>
      </p>
    </div>
  );
}

export default ProductDetailPage;

export async function loader({ request, params }) {
  const id = params.productId;

  const response = await fetch(`https://website-commerce-default-rtdb.firebaseio.com/products/items/${id}.json`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      },
    );
  } else {
    // const resData = await response.json();
    return response;
  }

  // try {
  //   const response = await axios.get(`https://website-commerce-default-rtdb.firebaseio.com/products/items/${id}.json`);
  //   console.log(response);
  //   return response;
  // } catch (error) {
  //   console.log(error);
  // }
}

export async function action({ params, request }) {
  const id = params.productId;
  // const response = fetch(`https://website-commerce-default-rtdb.firebaseio.com/products/items/${id}.json`, {
  //   method: request.method,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (!response.ok) {
  //   throw json({ message: "could not delete the product" }, { status: 500 });
  // }
  // return redirect("/products");

  const url = `https://website-commerce-default-rtdb.firebaseio.com/products/items/${id}.json`;

  try {
    const response = await fetch(url, {
      method: request.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Could not delete the product");
    }

    return redirect("/products");
  } catch (error) {
    return json({ message: error.message }, { status: 500 });
  }
}
