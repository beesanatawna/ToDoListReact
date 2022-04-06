import React, { useState } from "react";
import "./ToDoApp.css";
import ToDoItem from "./ToDoItem";

function ToDoApp() {
  let todos = [
    {
      id: 1,
      title: "clean your room",
    },
    {
      id: 2,
      title: "test2",
    },
    {
      id: 3,
      title: "test3",
    },
  ];
  let [id_index, setIdIndex] = useState(0);
  let [todoinput, setToDoInput] = useState("");
  let [todolist, setToDoList] = useState(todos);

  function update_text_field(event) {
    setToDoInput(event.target.value);
  }

  function inser_new(event) {
    event.preventDefault();
    setToDoList([...todolist, { id: id_index, title: todoinput }]);
    setIdIndex(id_index+1);
    setToDoInput("");
  }
  function remove_task(id) {
  let remaining_todos=todolist.filter((obj)=>{
    return obj.id !==id
  });
  setToDoList(remaining_todos);
    
  }

  return (
    <div className="to-do-app">
      <h1>My Todos</h1>

      <form className="to-do-app2">
        <input 
          value={todoinput}
          placeholder="enter your todo"
          onChange={update_text_field}
          className="items2"
        ></input>
        <button onClick={inser_new} className="items2">
          Add new
        </button>
      </form>
      {todolist.map((todos) => (
        <ToDoItem title={todos.title} key={todos.id} delete={()=>remove_task(todos.id)} />
      )
      )}
     
    </div>
  );
}

export default ToDoApp;
