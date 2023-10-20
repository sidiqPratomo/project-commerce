import React from "react";
import { Link, useParams, json, useLoaderData } from "react-router-dom";
import ProductItem from "../component/ProductItem";
import axios from "axios";

function ProductDetailPage() {
  const data = useLoaderData();
  const params = useParams();
  return (
    <div>
      <ProductItem product={data} />
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
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
    console.log(response);
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
