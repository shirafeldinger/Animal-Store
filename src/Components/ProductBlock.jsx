import React from "react";
import { Link } from "react-router-dom";

export default function ProductBlock({ product }) {
  return (
    <div
      style={{ height: "250px" }}
      className="d-flex flex-column justify-content-center align-items-center p-2 col-sm-12 col-md-3 card m-1 "
    >
      <Link to={`/products/${product.id}`}>
        <h6 style={{ direction: "rtl" }} className="text-center">
          {product.title}
        </h6>{" "}
      </Link>
      <Link to={`/products/${product.category}`}>
        categorys: {product.category}
      </Link>

      <img
        style={{ maxHeight: "250px", maxWidth: "250px" }}
        src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
        alt="img"
      />
      <div className="">{product.price}</div>
    </div>
  );
}
