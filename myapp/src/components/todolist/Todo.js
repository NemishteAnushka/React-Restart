import React from "react";
import { MdDelete } from "react-icons/md";
function Todo({ id, completed, title, toggleCompleted, deleteTodo }) {
  return (
    <tr>
      <td>{id}</td>
      <td className={`${completed ? "completed" : ""}`}>{title}</td>
      {/* <td>{completed ? "completed" : "not completed"}</td> */}
      <td>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
      </td>
      <td style={{ textAlign: "center" }}>
        <MdDelete
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteTodo(id);
          }}
        />
      </td>
    </tr>
  );
}

export default Todo;
