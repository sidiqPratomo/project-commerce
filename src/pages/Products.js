import { json, useLoaderData } from "react-router-dom";
import ProductList from "../component/ProductList";

function ProductsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const itemsArray = Object.values(data.items);
  const keysId = Object.keys(data.items);

  console.log("data product => " + JSON.stringify(itemsArray));
  return (
    <>
      <ProductList products={itemsArray} keys={keysId} />
      {/* <TestFetching /> */}
    </>
  );
}

export default ProductsPage;

export async function loader() {
  const response = await fetch(`https://website-commerce-default-rtdb.firebaseio.com/products.json`);

  if (!response.ok) {
    return json({ message: "Could not fetch the product" }, { status: 500 });

    // return new Response(JSON.stringify({ message: "Could not fetch the product" }), { status: 500 });
    // { isError: true, message: "could not fetch the product" };
    // throw { message: "could not fetch the product" };
  } else {
    const resData = await response.json();
    return resData;
    // const data = [...response.items];
    // // console.log(data);
    // console.log(JSON.stringify(response));
    // return response;
  }

  // const databaseURL = "https://website-commerce-default-rtdb.firebaseio.com/products/items.json";

  // axios
  //   .get(databaseURL)
  //   .then((response) => {
  //     if (response.data) {
  //       // Mengubah data dari objek menjadi array of objects
  //       const dataAsArray = Object.keys(response.data).map((key) => ({
  //         key: key,
  //         ...response.data[key],
  //       }));

  //       console.log(dataAsArray);
  //       return dataAsArray;
  //     } else {
  //       console.log("Tidak ada data yang ditemukan.");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Terjadi kesalahan:", error);
  //   });
}
