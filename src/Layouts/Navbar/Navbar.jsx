import React from "react";
import { Link } from "react-router-dom";
import NavbarWrapper from "./NavbarWrapper";

export default function Navbar() {
  return (
    <NavbarWrapper className="navbar">
      <Link className="navbar-brand " to="#">
        <img
          style={{ width: "100px", marginLeft: "30px" }}
          src="https://halfpi.nl/wp-content/uploads/2018/02/shop-icon-300x300.png"
          alt="shop"
        />
      </Link>{" "}
      <Link className="nav-item nav-link nav-btn " to="/products">
        דף הבית
      </Link>{" "}
      <Link className="nav-item nav-link nav-btn" to="/cart">
        עגלת קניות
      </Link>{" "}
      <Link className="nav-item nav-link nav-btn" to="/register">
        התחבר
      </Link>
      <Link className="nav-item nav-link nav-btn" to="#">
        צור קשר
      </Link>
    </NavbarWrapper>
  );
}
