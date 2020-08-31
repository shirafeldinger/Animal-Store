import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Users({ users, setUserNumber }) {
  return (
    <div>
      {" "}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link
              onClick={() => {
                setUserNumber(user.id);
              }}
              to="/user"
            >
              {user.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
