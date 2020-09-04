import React from "react";

export default function Register() {
  return (
    <form
      className="d-flex
    flex-column
    justify-content-center
    align-items-center text-right"
    >
      <div className="form-group">
        <label>כתובת הדואר האלקטרוני</label>
        <input
          type="email"
          className="form-control"
          placeholder="הזן את המייל ,בבקשה"
        />{" "}
      </div>
      <div className="form-group">
        <label>סיסמא</label>
        <input
          type="password"
          className="form-control"
          placeholder="הזן את הסיסמא,בבקשה"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        התחבר
      </button>
    </form>
  );
}
