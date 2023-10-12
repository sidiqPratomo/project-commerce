import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <div>
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
