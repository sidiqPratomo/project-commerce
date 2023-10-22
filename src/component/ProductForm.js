import React from "react";
import { Form, useNavigate } from "react-router-dom";
import classes from "./ProductForm.module.css";

function ProductForm({ method, product }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={product ? product.title : ""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={product ? product.image : ""} />
      </p>
      <p>
        <label htmlFor="id">Id</label>
        <input id="id" type="text" name="id" required defaultValue={product ? product.id : ""} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={product ? product.description : ""} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default ProductForm;
