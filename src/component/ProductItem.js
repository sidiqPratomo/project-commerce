import React from "react";
import classes from "./ProductItem.module.css";

function ProductItem(product) {
  return (
    <article className={classes.product}>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <time>{product.date}</time>
      <p>{product.description}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default ProductItem;
