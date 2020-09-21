import React, { useState, useEffect } from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import Search from "../../Layouts/Search/Search";
import Header from "./Header";
import AnimalList from "../../Layouts/AnimalList/AnimalList";

export default function Categorys({ products, match }) {
  const [filterdProducts, setFilterdProducst] = useState([]);
  const [header, setHeader] = useState("");
  const handleSearchText = (searchText) => {
    setFilterdProducst(
      products.filter((product) => product.title.includes(searchText))
    );
  };

  const findProductsByCategories = () => {
    if (!match) {
      setFilterdProducst(products);
    } else {
      const categories = match.params.categories.split(",");
      setFilterdProducst(
        products.filter((product) => {
          return categories.every((category) =>
            product.categories.includes(category)
          );
        })
      );
      setHeader(match.params.categories.replace(",", " "));
    }
  };

  useEffect(() => {
    findProductsByCategories();
  }, []);

  return (
    <>
      <Search handleSearch={(searchText) => handleSearchText(searchText)} />
      <AnimalList findProductsByCategories={findProductsByCategories} />
      <Header>{header}</Header>

      <div className="row d-flex justify-content-center align-items-center">
        {filterdProducts.map((product) => {
          return <ProductBlock key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
