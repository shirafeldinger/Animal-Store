import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar">
      {" "}
      <img
        className="shop-img"
        src="https://halfpi.nl/wp-content/uploads/2018/02/shop-icon-300x300.png"
        alt="shop"
      />
      <img
        className="nav-icon"
        onClick={() => {
          setOpen(!isOpen);
        }}
        src="https://img.icons8.com/ios-filled/50/000000/menu.png"
      />
      <div className={isOpen ? "responsive" : ""}>
        <Link to="/">דף הבית</Link> <Link to="/cart">עגלת קניות</Link>
        <Link to="/register">התחבר / הרשמה</Link>
        <Link to="/contact">צור קשר</Link>
      </div>
    </nav>
  );
}
