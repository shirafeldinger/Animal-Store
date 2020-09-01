import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar";
import Search from "./Layouts/Search";
import data from "./data/groo-pets-dummy-data.json";
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
          <Route exact path="/" component={() => <Products data={data} />} />
          <Route
            exact
            path="/products/category/:name"
            component={() => <Products />}
          />
          <Route
            exact
            path="/:id"
            render={({ match }) => <Product match={match} />}
          />
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
