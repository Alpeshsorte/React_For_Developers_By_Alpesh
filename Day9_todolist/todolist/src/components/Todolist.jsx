import React, { useState } from 'react'
import Input from './Input'
import './Todolist.css'
import Edit from './Edit'
export default function Todolist() {

  let [task, settask]=useState([])
  let [editTask, setEditTask] = useState(null)

  function aaladata(taskobj){

    settask([...task, taskobj])
    // console.log(taskobj);
  }
       // Delete Task
    function deleteTask(id) {
        let newTasks = tasks.filter(
            item => item.id !== id
        )

        setTasks(newTasks)
    }
        // Open Edit Form
    function editHandler(task) {
        setEditTask(task)
    }

        // Update Task
    function updateTask(updatedTask) {

        let newTasks = tasks.map(item =>
            item.id === updatedTask.id
                ? updatedTask
                : item
        )

        setTasks(newTasks)
        setEditTask(null)
    }

  return (
    <div  className="todo-container">

      <h1 className="todo-heading">Todo List</h1>
        <Input setdata={aaladata}/>
            {
                editTask &&
                <Edit
                    task={editTask}
                    updateTask={updateTask}
                />
            }
        <div className="task-list">
            {
              task.map((i)=>(
                <div className="task-card" key={i.id}>
                  <h3 className="task-name">{i.task}</h3>
                  <p className={`priority ${i.priority}`}>{i.priority}</p>
                    <button  onClick={() => editHandler(i)} type="button">Edit</button>
                    <button   onClick={() => deleteTask(i.id)} type="button">Delete</button>
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