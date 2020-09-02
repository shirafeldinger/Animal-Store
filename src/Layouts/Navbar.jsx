import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">
        Navbar
      </Link>

      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/products">
          Home
        </Link>
        <Link className="nav-item nav-link" to="#">
          Log In
        </Link>
        <Link className="nav-item nav-link" to="#">
          Shopping Cart
        </Link>
        <Link className="nav-item nav-link " to="#">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
