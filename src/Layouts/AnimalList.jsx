import React from "react";
import { Link } from "react-router-dom";

export default function AnimalList() {
  return (
    <div className="navbar ">
      <Link className="nav-link dropdown" to="#">
        {" "}
        כלבים
        <img
          className="list-img"
          src="https://www.petway.co.il/wp-content/uploads/2017/06/dogs.png"
          alt="img"
        />
        <div className="dropdown-content">
          {" "}
          <Link to="#">אוכל</Link>
          <Link to="#">צעצועים</Link>
          <Link to="#">חומרי הדברה</Link>
        </div>
      </Link>
      <Link className="nav-link dropdown" to="#">
        חתולים
        <img
          className="list-img"
          src="https://www.petway.co.il/wp-content/uploads/2017/06/cats.png"
          alt="img"
        />
        <div className="dropdown-content">
          {" "}
          <Link to="#">אוכל</Link>
          <Link to="#">צעצועים</Link>
          <Link to="#">חומרי הדברה</Link>
        </div>
      </Link>
      <Link className="nav-link dropdown" to="#">
        תוכים
        <img
          className="list-img"
          src="https://www.petway.co.il/wp-content/uploads/2017/06/perrotds.png"
          alt="img"
        />
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
