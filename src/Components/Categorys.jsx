import React from "react";
import ProductBlock from "./ProductBlock/ProductBlock";
import Search from "../Layouts/Search/Search";

export default function Categorys({ products, match }) {
  const handleSearchText = (searchText) => {
    console.log(searchText);
  };
  const findProductsByCategories = () => {
    let foundProducts = [];
    products.map((product) => {
      if (!match) {
        foundProducts = products;
      } else {
        let categories = match.params.categories.split(",");
        categories.forEach((category) => {
          if (
            product.categories.includes(category) &&
            !foundProducts.includes(product)
          ) {
            foundProducts.push(product);
          }
        });
      }
    });
    return foundProducts;
  };

  const foundProducts = findProductsByCategories();
  return (
    <>
      <Search handleSearch={(searchText) => handleSearchText(searchText)} />
      <div className="row d-flex justify-content-center align-items-center">
        {foundProducts.map((product) => {
          return <ProductBlock key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
