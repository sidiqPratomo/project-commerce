import React from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import classes from "./ProductForm.module.css";
import { json, redirect } from "react-router-dom";
import { getAuth } from "../util/auth";

function ProductForm({ method, product }) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
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
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting.." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default ProductForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const productFormData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    id: data.get("id"),
  };

  let url = "https://website-commerce-default-rtdb.firebaseio.com/products/items.json";

  if (method === "PATCH") {
    const id = params.productId;
    url = `https://website-commerce-default-rtdb.firebaseio.com/products/items/${id}.json`;
  }

  const token = getAuth();
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    body: JSON.stringify(productFormData),
  });

  if (!response.ok) {
    throw json({ message: "cannot submit the product" }, { status: 500 });
  }
  return redirect("/products");
}
