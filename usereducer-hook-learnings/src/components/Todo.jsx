import React from "react";

function Todo({ completed, id, title, dispatch }) {
  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  const handleCompleted = () => {
    dispatch({ type: "COMPLETED", payload: id });
  };
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "gray",
        color: "white",
        paddingLeft: "0.5rem",
        borderRadius: "1rem",
        marginTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <h3>ID : {id}</h3>
      <h3 style={{ textDecoration: completed ? "line-through" : "solid" }}>
        Title : {title}
      </h3>
      <h3>Completed : {completed ? "Done" : "Not Done"}</h3>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleCompleted}>ToggleCompleted</button>
    </div>
  );
}

export default Todo;
