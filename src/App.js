import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layouts/Navbar";
import Search from "./Layouts/Search";
import Users from "./Components/Users";
import User from "./Components/User";
import Deals from "./Components/Deals";
import "./App.css";

function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [userNumber, setUserNumber] = useState("");

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });

    fetch(baseUrl + "/photos")
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
      });

    fetch(baseUrl + "/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });

    return () => {};
  }, []);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals")
      .then((response) => response.json())
      .then((json) => {
        setDeals(json);
      });

    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Users users={users} setUserNumber={setUserNumber} />
            )}
          />

          <Route
            exact
            path="/user"
            component={() => (
              <User photos={photos} userNumber={userNumber} todos={todos} />
            )}
          />
          <Route
            exact
            path="/deals"
            component={() => <Deals deals={deals} />}
          />
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
