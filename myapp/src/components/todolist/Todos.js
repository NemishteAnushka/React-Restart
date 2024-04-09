import React from "react";
import Todo from "./Todo";

function Todos({ todos, toggleCompleted,deleteTodo }) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>status</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <Todo {...todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
          );
        })}
      </tbody>
    </table>
  );
}

export default Todos;
