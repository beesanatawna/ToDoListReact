import React from "react";
import "./ToDoApp.css";
import ToDoApp from "./ToDoApp";

function ToDoItem(props){
  return (
    <div className="items">
      <h4>{props.title}</h4>
     
         <button onClick={props.delete} >Remove Task</button>
      
     
    </div>
  );
}

export default ToDoItem;
