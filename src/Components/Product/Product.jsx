import React from "react";
import { getProductById } from "../../data/database";
import Title from "../ProductBlock/Title";
import Price from "../ProductBlock/Price";
import ProductWrapper from "./ProductWrapper";
export default function Product(props) {
  const productId = props.match.params.id;
  const product = getProductById(productId);
  return (
    <ProductWrapper className="card">
      <Title className="">
        {product.title.replace("[MIN_PRICE]", product.price)}
      </Title>

      {/* <div dangerouslySetInnerHTML={{ __html: product.description }}></div> */}
      <Price>₪{product.price}</Price>
      <img
        style={{ maxHeight: "300px", maxWidth: "300px" }}
        src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
        alt="img"
      />
      <button
        className="btn btn-danger m-3"
        onClick={() => {
          props.handleProductSelected(product);
        }}
      >
        הוסף לסל
      </button>
    </ProductWrapper>
  );
}
