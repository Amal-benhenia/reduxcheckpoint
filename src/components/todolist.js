import React from "react";
import Todo from "./todo";
import { useSelector } from "react-redux";
export default function Todolist( ) {


const todoList=useSelector(state=> state.todos )

  return (
    <div className="todoListContainer">
      {todoList.map((el) => (
        <Todo task={el} />
      ))}
    </div>
  );
}