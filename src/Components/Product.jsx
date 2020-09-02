import React from "react";
import { getProductById } from "../data/database";
export default function Product(props) {
  const productId = props.match.params.id;
  const product = getProductById(productId);
  return (
    <div
      className=" d-flex
        flex-column
        justify-content-center
        align-items-center card product"
    >
      <h6 style={{ direction: "rtl" }} className="text-center">
        {product.title.replace("[MIN_PRICE]", product.price)}
      </h6>

      {/* <div
        className=" text-center d-flex  align-items-center "
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></div> */}
      <div
        style={{ fontWeight: "700", fontSize: "2.5714em", color: "#fc6f38" }}
      >
        ₪{product.price}
      </div>
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
    </div>
  );
}
