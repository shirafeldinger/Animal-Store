import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={isOpen ? "navbar  responsive" : "navbar"}>
      {" "}
      <img
        className="shop-img"
        src="https://halfpi.nl/wp-content/uploads/2018/02/shop-icon-300x300.png"
        alt="shop"
      />
      <div>
        {" "}
        <img
          className="nav-icon"
          onClick={() => {
            setOpen(!isOpen);
          }}
          src="https://img.icons8.com/ios-filled/50/000000/menu.png"
        />
      </div>
      <Link to="/">דף הבית</Link> <Link to="/cart">עגלת קניות</Link>
      <Link to="/register">התחבר / הרשמה</Link>
      <Link to="/contact">צור קשר</Link>
    </nav>
  );
}
