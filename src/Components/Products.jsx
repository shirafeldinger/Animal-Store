import React from "react";
import ProductBlock from "./ProductBlock/ProductBlock";
export default function Products({ products }) {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      {products.map((product) => {
        return <ProductBlock key={product.id} product={product} />;
      })}
    </div>
  );
}
