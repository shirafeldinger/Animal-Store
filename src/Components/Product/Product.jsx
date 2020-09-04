import React from "react";
import { getProductById } from "../../data/database";
import Price from "../ProductBlock/Price";
import ProductWrapper from "./ProductWrapper";
import ProductTitle from "./ProductTitle";
import ProductDescriotion from "./ProductDescription";
import ProductImg from "./ProductImg";
import ProductBtn from "./ProductBtn";
export default function Product(props) {
  const productId = props.match.params.id;
  const product = getProductById(productId);
  return (
    <ProductWrapper className="card">
      <ProductImg
        src={`https://cdn.groo.co.il/_media/media/${product.media_cat_id}/${product.media_id}.jpg`}
        alt="img"
      />
      <ProductTitle className="">
        {product.title.replace("[MIN_PRICE]", product.price)}
      </ProductTitle>

      <Price>₪{product.price}</Price>

      {/* <ProductDescriotion
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></ProductDescriotion> */}

      <ProductBtn
        className="btn-lg"
        onClick={() => {
          props.handleProductSelected(product);
        }}
      >
        הוסף לסל
      </ProductBtn>
    </ProductWrapper>
  );
}
