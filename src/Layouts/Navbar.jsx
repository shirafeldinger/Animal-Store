import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-item nav-link nav-btn" to="#">
        צור קשר
      </Link>
      <Link className="nav-item nav-link nav-btn" to="#">
        התחבר
      </Link>
      <Link className="nav-item nav-link nav-btn" to="#">
        עגלת קניות
      </Link>
      <Link className="nav-item nav-link nav-btn " to="/products">
        דף הבית
      </Link>
      <Link className="navbar-brand nav-btn" to="#">
        Navbar
      </Link>
    </nav>
  );
}
