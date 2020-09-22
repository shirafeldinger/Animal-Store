import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar/Navbar";
import AnimalList from "./Layouts/AnimalList/AnimalList";
import { products } from "./data/database";
import "./App.css";
import Product from "./Components/Product/Product";
import Categorys from "./Components/Categories/Categorys";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register";
import Contact from "./Components/Contact";

function App() {
  const [productSelected, setProductSelected] = useState([]);

  const handleProductSelected = (newProduct) => {
    // check if product with newProduct.id already exist in productSelected, if so incremante the count by 1,
    // otherwise add the new product with count = 1
    const foundIndex = productSelected.findIndex(
      (product) => product.id === newProduct.id
    );

    if (foundIndex !== -1) {
      productSelected[foundIndex].count++;
      setProductSelected(productSelected);
    } else {
      newProduct.count = 1;
      setProductSelected([...productSelected, { ...newProduct }]);
    }
  };

  const handleRemoveProduct = (i) => {
    let tempProducts = productSelected.filter((product, index) => index !== i);
    setProductSelected([...tempProducts]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimalList />
        <div className="innerPage">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Categorys products={products} />}
            />{" "}
            <Route
              exact
              path="/category/:categories"
              render={({ match }) => (
                <Categorys match={match} products={products} />
              )}
            />
            <Route
              exact
              path="/products/:id"
              render={({ match }) => (
                <Product
                  match={match}
                  handleProductSelected={handleProductSelected}
                />
              )}
            />
            <Route
              exact
              path="/cart"
              component={() => (
                <Cart
                  productSelected={productSelected}
                  handleRemoveProduct={handleRemoveProduct}
                />
              )}
            />{" "}
            <Route exact path="/register" component={() => <Register />} />
            <Route exact path="/contact" component={() => <Contact />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
