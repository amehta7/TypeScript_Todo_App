import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((i) => (
        <TodoItem
          key={i.id}
          text={i.text}
          onRemove={todoCtx.removeTodo.bind(null, i.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
