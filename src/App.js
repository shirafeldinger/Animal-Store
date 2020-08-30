import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar";
import Search from "./Layouts/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
