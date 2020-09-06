import React, { useState } from "react";
import Form from "./Form";

export default function Search({ handleSearch }) {
  const [search, setSearch] = useState("");
  return (
    <div className="d-flex align-items-center justify-content-center m-2 ">
      <Form className="form-control ">
        {" "}
        <input
          className="form-control border-0 shadow-none"
          type="text"
          placeholder="חפש מוצר"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            handleSearch(search);
          }}
        >
          חפש
        </button>
      </Form>
    </div>
  );
}
