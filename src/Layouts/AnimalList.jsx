import React from "react";
import { Link } from "react-router-dom";

export default function AnimalList() {
  return (
    <div className="navbar ">
      <Link className="nav-link dropdown" to="#">
        {" "}
        כלבים
        <div className="dropdown-content">
          {" "}
          <Link to="#">אוכל</Link>
          <Link to="#">צעצועים</Link>
          <Link to="#">חומרי הדברה</Link>
        </div>
      </Link>
      <Link className="nav-link dropdown" to="#">
        חתולים
        <div className="dropdown-content">
          {" "}
          <Link to="#">אוכל</Link>
          <Link to="#">צעצועים</Link>
          <Link to="#">חומרי הדברה</Link>
        </div>
      </Link>
      <Link className="nav-link dropdown" to="#">
        תוכים
        <div className="dropdown-content">
          {" "}
          <Link to="#">אוכל</Link>
          <Link to="#">צעצועים</Link>
          <Link to="#">חומרי הדברה</Link>
        </div>
      </Link>
    </div>
  );
}
