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
      <Link className="nav-btn " to="/">
        דף הבית
      </Link>{" "}
      <Link className="nav-btn" to="/cart">
        עגלת קניות
      </Link>{" "}
      <Link className="nav-btn" to="/register">
        התחבר / הרשמה
      </Link>
      <Link className="nav-btn" to="/contact">
        צור קשר
      </Link>
    </NavbarWrapper>
  );
}
