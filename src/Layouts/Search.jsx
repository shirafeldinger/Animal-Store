import React from "react";

export default function Search() {
  return (
    <div className="d-flex align-items-center justify-content-center m-2 ">
      <form className="d-flex align-items-center w-50 p-4 form-control form">
        {" "}
        <button className="btn">חפש</button>
        <input
          style={{ textAlign: "right" }}
          className="form-control border-0 shadow-none border "
          type="text"
          placeholder="חפש מוצר"
        />
      </form>
    </div>
  );
}
