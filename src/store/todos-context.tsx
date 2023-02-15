import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todoData, setTodoData] = useState<Todo[]>([]);

  const addTodoHandler = (enteredTodoText: string) => {
    const newTodo = new Todo(enteredTodoText);

    setTodoData((prevTodoState) => {
      return prevTodoState.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodoData((prevTodoState) => {
      return prevTodoState.filter((todo) => todo.id !== id);
    });
  };

  return (
    <TodosContext.Provider
      value={{
        items: todoData,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
