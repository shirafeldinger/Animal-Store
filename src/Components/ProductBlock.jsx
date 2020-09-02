import React from "react";
import { Link } from "react-router-dom";

export default function ProductBlock({ product }) {
  return (
    <div
      style={{ height: "300px" }}
      className="d-flex flex-column justify-content-center align-items-center p-2 col-sm-12 col-md-3 card m-1 "
    >
      <Link to={`/products/${product.id}`}>
        <h6 style={{ direction: "rtl" }} className="text-center">
          {product.title.replace("[MIN_PRICE]", product.price)}
        </h6>{" "}
      </Link>
      <Link style={{ direction: "rtl" }} to={`/category/${product.category}`}>
        קטגוריה: {product.category}
      </Link>

      <img
        style={{ maxHeight: "250px", maxWidth: "250px" }}
        src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
        alt="img"
      />
      <h5 style={{ color: "#fc6f38", fontWeight: "700" }}>{product.price}₪</h5>
    </div>
  );
}
