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
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
          ))
        }
  
        </div>
       
    </div>
  )
}



// Features to Include in Your React Todo Project
// Add Task
// Edit Task
// Delete Task
// Task Priority (High, Medium, Low)
// Due Date
// Mark as Complete
// Search Tasks
// Filter by Priority
// Local Storage Persistence
// Responsive Design
// Dark/Light Mode

// For a machine test or portfolio project, a modern card-based Todo List with priority badges, 
// edit/delete buttons, and dark mode support looks the most professional and can impress interviewers.