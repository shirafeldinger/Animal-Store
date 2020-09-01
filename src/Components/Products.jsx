import React from "react";
import ProductBlock from "./ProductBlock";
export default function Products({ products }) {
  const numProducts = 10;

  return (
    <div className="row d-flex justify-content-center align-items-center">
      {products.map((product, index) => {
        if (index < numProducts) {
          return <ProductBlock key={product.id} product={product} />;
        }
      })}
    </div>
  );
}
