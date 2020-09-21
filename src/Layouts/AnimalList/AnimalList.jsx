import React from "react";
import { Link } from "react-router-dom";
import AnimalWrapper from "./AnimalWrapper";
import ListImg from "./ListImg";
export default function AnimalList() {
  return (
    <AnimalWrapper>
      <div className="dropdown">
        <Link to="/category/dogs">
          <ListImg
            className="list-img"
            src="https://www.petway.co.il/wp-content/uploads/2017/06/dogs.png"
            alt="img"
          />
        </Link>
        כלבים
        <div className="dropdown-content">
          <Link to="/category/dogs,food">אוכל</Link>
          <Link to="/category/dogs,toys">צעצועים</Link>
          <Link to="/category/dogs,flea&tick">חומרי הדברה</Link>
          <Link to="/category/dogs,snacks">חטיפים</Link>
          <Link to="/category/dogs,accessories">אביזרים</Link>
        </div>
      </div>
      <div className="dropdown">
        <Link to="/category/cats">
          {" "}
          <ListImg
            className="list-img"
            src="https://www.petway.co.il/wp-content/uploads/2017/06/cats.png"
            alt="img"
          />
        </Link>
        חתולים
        <div className="dropdown-content">
          {" "}
          <Link to="/category/cats,food">אוכל</Link>
          <Link to="/category/cats,toys">צעצועים</Link>
          <Link to="/category/cats,accessories">אביזרים</Link>
          <Link to="/category/cats,snacks">חטיפים</Link>
        </div>
      </div>
      <div className="dropdown">
        <ListImg
          className="list-img"
          src="https://www.petway.co.il/wp-content/uploads/2017/06/perrotds.png"
          alt="img"
        />
        תוכים
        <div className="dropdown-content">
          {" "}
          <Link to="#">אוכל</Link>
          <Link to="#">צעצועים</Link>
          <Link to="#"> חטיפים</Link>
        </div>
      </div>
    </AnimalWrapper>
  );
}
