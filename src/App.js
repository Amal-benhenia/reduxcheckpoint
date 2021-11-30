import "./App.css";
import AddTodo from "./components/addTodo";
import Todolist from "./components/todolist";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <h1> TO DO LIST </h1>
      <AddTodo />
      <Todolist  />
    </div>
  );
}

export default App;
