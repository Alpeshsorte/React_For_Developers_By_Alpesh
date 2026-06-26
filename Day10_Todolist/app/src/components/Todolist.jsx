import React from 'react'
import InpCol from './InpCol'
import { useState } from 'react'
import TaskCol from './TaskCol'

export default function Todolist() {

    let divstyle = {
        height:'600px',
        width:'450px',
        margin:'auto',
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",borderRadius:'10px',
        marginTop:'50px'
    }

    let [task,setTask] = useState([])

  return (
    <div
  style={{
    width: "80%",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "25px",
    background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    border: "1px solid #e5e5e5",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "34px",
      fontWeight: "bold",
      color: "#2d3436",
      letterSpacing: "1px",
      marginBottom: "25px",
      paddingBottom: "12px",
      borderBottom: "3px solid #6C63FF",
    }}
  >
    📝 To-Do List
  </h2>

  <InpCol task={task} setTask={setTask} />

  <div
    style={{
      marginTop: "25px",
      padding: "15px",
      borderRadius: "15px",
      backgroundColor: "#f7f9fc",
      boxShadow: "inset 0 2px 8px rgba(0,0,0,0.08)",
    }}
  >
    <TaskCol todos={task} Task={{ task, setTask }} />
  </div>
</div>
  )
}
