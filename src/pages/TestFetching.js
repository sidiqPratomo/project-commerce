import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "../component/ProductList.module.css";

function TestFetching() {
  const [products, setProducts] = useState(null);
  const databaseURL = "https://website-commerce-default-rtdb.firebaseio.com/products/items.json";

  axios
    .get(databaseURL)
    .then((response) => {
      if (response.data) {
        // Mengubah data dari objek menjadi array of objects
        const dataAsArray = Object.keys(response.data).map((key) => ({
          key: key,
          ...response.data[key],
        }));
        setProducts(dataAsArray);
        console.log(dataAsArray);
      } else {
        console.log("Tidak ada data yang ditemukan.");
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
  return (
    <div className={classes.events}>
      <h1>All Products</h1>
      <ul className={classes.list}>
        {products.map((prod) => (
          <li key={prod.key} className={classes.item}>
            <Link to={`/products/${prod.id}`}>
              <img src={prod.image} alt={prod.title} />
              <div className={classes.content}>
                <h2>{prod.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestFetching;
