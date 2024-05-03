import React, { useContext } from "react";
import { TodoContext } from "./TodoProvider";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {
        todos.map((todo)=> <Todo {...todo} key={todo.id}/>)
      }
    </div>
  );
}

export default TodoList;
