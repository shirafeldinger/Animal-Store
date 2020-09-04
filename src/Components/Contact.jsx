import React from "react";

export default function Contact() {
  return (
    <form
      className="d-flex
    flex-column
    justify-content-center
    align-items-center text-right"
    >
      <div className="form-group">
        <label>שם מלא</label>
        <input className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">מייל</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>נושא</label>
        <input className="form-control" type="text" />
      </div>

      <div class="form-group">
        <label>כתוב את ההודעה</label>
        <textarea className="form-control" rows="5"></textarea>
      </div>
    </form>
  );
}
