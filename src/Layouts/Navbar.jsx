import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" navbar d-flex w-100 align-items-center justify-content-around">
      <Link to="#">Home</Link>
      <Link to="#">Log In</Link>
      <Link to="#">Shopping Cart</Link>
      <Link to="#">Contact Us</Link>
    </nav>
  );
}
