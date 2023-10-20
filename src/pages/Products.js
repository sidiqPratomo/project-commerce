import { json, useLoaderData } from "react-router-dom";
import ProductList from "../component/ProductList";

function ProductsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const items = data.items;
  return <ProductList products={items} />;
}

export default ProductsPage;

export async function loader() {
  const response = await fetch("https://website-commerce-default-rtdb.firebaseio.com/products.json");

  if (!response.ok) {
    return json({ message: "Could not fetch the product" }, { status: 500 });

    //return new Response(JSON.stringify({ message: "Could not fetch the product" }), { status: 500 });
    //{ isError: true, message: "could not fetch the product" };
    // throw { message: "could not fetch the product" };
  } else {
    // const resData = await response.json();
    // return resData.items;
    console.log(response);
    return response;
  }
}
