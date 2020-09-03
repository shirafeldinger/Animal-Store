import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Price from "./Price";
import ProductBlockWrapper from "./ProductBlockWrapper";

export default function ProductBlock({ product }) {
  return (
    <ProductBlockWrapper className="col-sm-12 col-md-3 card box">
      <Link to={`/products/${product.id}`}>
        <Title>{product.title.replace("[MIN_PRICE]", product.price)}</Title>{" "}
      </Link>
      <Link to={`/category/${product.category}`}>
        קטגוריה: {product.category}
      </Link>

      <img
        style={{ maxHeight: "200px", maxWidth: "200px" }}
        src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
        alt="img"
      />
      <Price>₪{product.price}</Price>
    </ProductBlockWrapper>
  );
}
