import React from "react";
import Form from "./Form";

export default function Search() {
  return (
    <div className="d-flex align-items-center justify-content-center m-2 ">
      <Form className="form-control ">
        {" "}
        <input
          className="form-control border-0 shadow-none"
          type="text"
          placeholder="חפש מוצר"
        />
        <button className="btn">חפש</button>
      </Form>
    </div>
  );
}
