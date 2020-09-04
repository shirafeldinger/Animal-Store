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
        className="btn"
        onClick={() => {
          props.handleProductSelected(product);
        }}
      >
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
        </svg>
        הוסף לסל
      </ProductBtn>
    </ProductWrapper>
  );
}
