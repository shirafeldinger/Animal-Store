import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar";
import Search from "./Layouts/Search";
import { someProducts } from "./data/database";
import Products from "./Components/Products";
import "./App.css";
import Product from "./Components/Product";
import Categorys from "./Components/Categorys";
import AnimalList from "./Layouts/AnimalList";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <div className="row">
          <div className="col-md-1">
            <AnimalList />
          </div>
          <div className="col-md-11">
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
                render={({ match }) => <Product match={match} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
