import React from "react";
import ProductBlock from "./ProductBlock/ProductBlock";
import Search from "../Layouts/Search/Search";

export default function Categorys({ products, match }) {
  const handleSearchText = (searchText) => {
    console.log(searchText);
  };

  const findProductsByCategories = () => {
    let foundProducts = [];
    if (!match) {
      return products;
    } else {
      const categories = match.params.categories.split(",");
      foundProducts = products.filter((product) => {
        return categories.every((category) =>
          product.categories.includes(category)
        );
      });
    }

    return foundProducts;
  };

  const foundProducts = findProductsByCategories();
  return (
    <>
      <Search handleSearch={(searchText) => handleSearchText(searchText)} />
      <h1>{match.params.categories}</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {foundProducts.map((product) => {
          return <ProductBlock key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
