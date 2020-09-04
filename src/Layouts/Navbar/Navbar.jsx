import React from "react";
import { Link } from "react-router-dom";
import NavbarWrapper from "./NavbarWrapper";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Link to="#">
        <img
          src="https://halfpi.nl/wp-content/uploads/2018/02/shop-icon-300x300.png"
          alt="shop"
        />
      </Link>{" "}
      <Link className="nav-btn " to="/products">
        דף הבית
      </Link>{" "}
      <Link className="nav-btn" to="/cart">
        עגלת קניות
      </Link>{" "}
      <Link className="nav-btn" to="/register">
        התחבר
      </Link>
      <Link className="nav-btn" to="#">
        צור קשר
      </Link>
    </NavbarWrapper>
  );
}
