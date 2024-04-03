import React from "react";
import Todo from "./Todo";

function Todos({ todos }) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return <Todo {...todo} key={todo.id}/>;
        })}
      </tbody>
    </table>
  );
}

export default Todos;
