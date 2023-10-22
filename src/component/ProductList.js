import React from "react";
import classes from "./ProductList.module.css";
import { Link } from "react-router-dom";

function ProductList({ products, keys }) {
  // const events = useLoaderData();
  // const products = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Products</h1>
      <ul className={classes.list}>
        {products.map((prod, index) => (
          <li key={prod.key} className={classes.item}>
            <Link to={`/products/${keys[index]}`}>
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

export default ProductList;
