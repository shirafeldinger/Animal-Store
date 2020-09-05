import React from "react";
import ProductBlock from "./ProductBlock/ProductBlock";
export default function Categorys({ products, match }) {
  const category = match.params.name;
  console.log(category);
  return (
    <div className="row d-flex justify-content-center align-items-center">
      {products.map((product) => {
        if (product.category == category) {
          return <ProductBlock key={product.id} product={product} />;
        }
      })}
    </div>
  );
}
