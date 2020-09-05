import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Price from "./Price";
import ProductBlockWrapper from "./ProductBlockWrapper";
import ProductImg from "./ProductImg";

export default function ProductBlock({ product }) {
  return (
    <ProductBlockWrapper className="col-sm-12 col-md-3 card box">
      <Link to={`/products/${product.id}`}>
        <ProductImg
          src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
          alt="img"
        />
        <Title>{product.title.replace("[MIN_PRICE]", product.price)}</Title>{" "}
      </Link>
      <Price>₪{product.price}</Price>
    </ProductBlockWrapper>
  );
}
