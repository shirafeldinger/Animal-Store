import React from "react";
import { Link } from "react-router-dom";

export default function AnimalList() {
  return (
    <div className="navbar ">
      <Link className="nav-link" to="#">
        כלבים
      </Link>
      <Link className="nav-link" to="#">
        חתולים
      </Link>
      <Link className="nav-link" to="#">
        תוכים
      </Link>
    </div>
  );
}
