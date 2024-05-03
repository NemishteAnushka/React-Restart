import React, { useContext } from "react";
import { TodoContext } from "./TodoProvider";

function Todo({ id, completed, title }) {
  const { handleDelete, ToggleCompleted } = useContext(TodoContext);
  return (
    <div
      style={{
        margin: "1rem",
        backgroundColor: "#cecece",
        padding: "0.5rem",
        borderRadius: "1rem",
      }}
    >
      <h2>Id : {id}</h2>
      <h2 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        Title : {title}{" "}
      </h2>
      <h2>Completed : {completed ? "Done" : "Not Done"}</h2>
      <button
        style={{ borderRadius: "10px", padding: "8px" }}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete Todo
      </button>
      <button
        style={{ borderRadius: "10px", padding: "8px", marginLeft: "10px" }}
        onClick={() => {
          ToggleCompleted(id);
        }}
      >
        Toggle Completed
      </button>
    </div>
  );
}

export default Todo;
