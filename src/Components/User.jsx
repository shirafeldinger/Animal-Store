import React from "react";
export default function User({ photos, userNumber, todos }) {
  const chosenUser = photos.filter((photo) => photo.id === userNumber);
  const todosSlice = todos.splice(userNumber, 10);

  return (
    <div>
      <img src={chosenUser[0].thumbnailUrl} alt="img" />
      <div>
        {todosSlice.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.title} </div>
              <div className="">{todo.id}</div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
