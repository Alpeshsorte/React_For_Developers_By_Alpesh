import React, { useState } from 'react'
import Input from './Input'
import './Todolist.css'
export default function Todolist() {

  let [task, settask]=useState([])
  function aaladata(taskobj){

    settask([...task, taskobj])
    console.log(taskobj);
    

  }

  return (
    <div  className="todo-container">

      <h1 className="todo-heading">Todo List</h1>
        <Input setdata={aaladata}/>
        <div className="task-list">
        {
          task.map((i)=>(
            <div className="task-card" key={i.id}>
              <h3 className="task-name">{i.task}</h3>
              <p className={`priority ${i.priority}`}>{i.priority}</p>
            </div>
          ))
        }
        </div>
    </div>
  )
}
