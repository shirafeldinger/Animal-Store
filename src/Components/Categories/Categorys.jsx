import React, { useState, useEffect } from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import Search from "../../Layouts/Search/Search";
import Header from "./Header";
import AnimalList from "../../Layouts/AnimalList/AnimalList";

export default function Categorys({ products, match }) {
  const [filterdProducts, setFilterdProducst] = useState([]);
  const handleSearchText = (searchText) => {
    setFilterdProducst(
      products.filter((product) => product.title.includes(searchText))
    );
  };

  const findProductsByCategories = () => {
    let foundProducts = [];
    if (!match) {
      setFilterdProducst(products);
    } else {
      const categories = match.params.categories.split(",");
      foundProducts = products.filter((product) => {
        return categories.every((category) =>
          product.categories.includes(category)
        );
      });

      setFilterdProducst(foundProducts);
    }
  };

  useEffect(() => {
    findProductsByCategories();
  }, []);

  return (
    <>
      <Search handleSearch={(searchText) => handleSearchText(searchText)} />
      <AnimalList findProductsByCategories={findProductsByCategories} />
      {/* <Header>{match.params.categories}</Header> */}

      <div className="row d-flex justify-content-center align-items-center">
        {filterdProducts.map((product) => {
          return <ProductBlock key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
