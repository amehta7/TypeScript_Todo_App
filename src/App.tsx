import React from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
};

export default App;
