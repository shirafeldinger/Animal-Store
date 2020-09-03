import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Layouts/Navbar/Navbar";
import Search from "./Layouts/Search";
import AnimalList from "./Layouts/AnimalList/AnimalList";

import { someProducts } from "./data/database";
import Products from "./Components/Products";
import "./App.css";
import Product from "./Components/Product/Product";
import Categorys from "./Components/Categorys";
import Cart from "./Components/Cart";
import Register from "./Components/Register";

function App() {
  const [productSelected, setProductSelected] = useState([]);

  const handleProductSelected = (newProduct) => {
    setProductSelected([...productSelected, { ...newProduct }]);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <AnimalList />
        <div className="innerPage">
          <Switch>
            <Route
              exact
              path="/products"
              component={() => <Products products={someProducts} />}
            />{" "}
            <Route
              exact
              path="/category/:name"
              render={({ match }) => (
                <Categorys match={match} products={someProducts} />
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
              component={() => <Cart productSelected={productSelected} />}
            />{" "}
            <Route exact path="/register" component={() => <Register />} />{" "}
          </Switch>
        </div>
        {/* <div className="row">
          <div className="col-md-2 order-md-2 ">
            <AnimalList />
          </div>
          <div className="col-md-10 order-md-1">
            <Switch>
              <Route
                exact
                path="/products"
                component={() => <Products products={someProducts} />}
              />{" "}
              <Route
                exact
                path="/category/:name"
                render={({ match }) => (
                  <Categorys match={match} products={someProducts} />
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
                component={() => <Cart productSelected={productSelected} />}
              />{" "}
              <Route exact path="/register" component={() => <Register />} />{" "}
            </Switch>
          </div>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
