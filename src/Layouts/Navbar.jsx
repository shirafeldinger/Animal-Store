import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-item nav-link" to="#">
        צור קשר
      </Link>
      <Link className="nav-item nav-link" to="#">
        התחבר
      </Link>
      <Link className="nav-item nav-link" to="#">
        עגלת קניות
      </Link>
      <Link className="nav-item nav-link " to="/products">
        דף הבית
      </Link>
      <Link className="navbar-brand" to="#">
        Navbar
      </Link>
    </nav>
  );
}
