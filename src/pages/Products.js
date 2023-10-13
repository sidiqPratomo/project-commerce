import { useLoaderData } from "react-router-dom";
import ProductList from "../component/ProductList";

function ProductsPage() {
  const items = useLoaderData();
  return <ProductList products={items} />;
}

export default ProductsPage;

export async function loader() {
  const response = await fetch("https://website-commerce-default-rtdb.firebaseio.com/products.json");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.items;
  }
}
