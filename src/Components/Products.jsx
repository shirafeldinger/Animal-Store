import React from "react";
import ProductBlock from "./ProductBlock";
export default function Products({ data }) {
  const numProducts = 10;

  return (
    <div className="row d-flex justify-content-center align-items-center">
      {data.map((product, index) => {
        if (index < numProducts) {
          return <ProductBlock key={product.id} product={product} />;
        }
      })}
    </div>
  );
}
