import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar";
import Search from "./Layouts/Search";
import { products } from "./data/database";
import Products from "./Components/Products";
import "./App.css";
import Product from "./Components/Product";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Switch>
          <Route
            exact
            path="/products"
            component={() => <Products products={products} />}
          />
          {/* <Route
            exact
            path="/products/:category"
            render={({ match }) => <Product match={match} />}
          /> */}
          <Route
            exact
            path="/products/:id"
            render={({ match }) => <Product match={match} />}
          />
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
