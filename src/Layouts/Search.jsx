import React from "react";

export default function Search() {
  return (
    <form className="d-flex align-items-center justify-content-between  w-50 p-4 form-control">
      <input
        className="form-control border-0 shadow-none"
        type="text"
        placeholder="search for product..."
      />
      <button className="btn">Search</button>
    </form>
  );
}
