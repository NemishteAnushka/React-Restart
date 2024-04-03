import React from "react";

function Todo({ id, completed, title }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{completed ? "completed" : "not completed"}</td>
    </tr>
  );
}

export default Todo;
