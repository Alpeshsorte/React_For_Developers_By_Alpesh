import React, { useState, useEffect } from 'react'
import InpCol from './InpCol';
export default function TaskItem({obj,srno,Task}) {
   let [editValue, setEditValue] = useState("")
   
  function changeStatus(event){
      let btnval = Number(event.target.value) 
      let updatedArr = Task.task.map((el,i)=>{
        if(el.id == btnval){
          let obj = {
            id : el.id,
            name : el.name,
            priority : el.priority,
            status : el.status ? false : true,
            status2 : !el.status2
          }
          return obj
        }else{
          return el
        }
      })

      Task.setTask(updatedArr)
  }
    
  function removeTask(event){

    let btnval = Number(event.target.value)

    let updatedArr = Task.task.filter((el,i)=>{
       return el.id != btnval
    })

    Task.setTask(updatedArr)
  }

  function edittask(event){
    setEditValue(obj.name)

    let updatedArr = Task.task.map((el)=>{
      if(el.id === obj.id){
        return {
          ...el,
          status2:true
        }
      }
      return el
    })
    Task.setTask(updatedArr)
    
  }

  function donetask(){
    let updatedArr =Task.task.map((el)=>{
      if (el.id === obj.id){
        return {
          ...el,
          name:editValue,
          status2 : false
        }
      }
      return el
    })
    Task.setTask(updatedArr)
  }
  

  return (

    <div
  style={{
    width: "95%",
    margin: "10px auto",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    transition: "0.3s",
  }}
>
  <h3
    style={{
      width: "40px",
      textAlign: "center",
      color: "#555",
    }}
  >
    {srno}
  </h3>

  {
    obj.status2 ? <input value={editValue} onChange={(e)=>setEditValue(e.target.value)}  style={{
              flex: 1,
              marginLeft: "20px",
              padding: "8px"
            }}
            />
            :
             <h3
            style={{
              flex: 1,
              marginLeft: "20px"
            }}
          >
            {obj.name}
          </h3>

  }
{/* 
  <h3
    style={{
      flex: 1,
      marginLeft: "20px",
      color: "#222",
      fontWeight: "600",
    }}
  >
    {obj.name}
  </h3> */}

  <span
    style={{
      padding: "6px 12px",
      borderRadius: "20px",
      color: "#fff",
      fontWeight: "bold",
      backgroundColor:
        obj.priority == 1
          ? "#ef4444"
          : obj.priority == 2
          ? "#f59e0b"
          : obj.priority == 3
          ? "#22c55e"
          : "#6b7280",
    }}
  >
    {obj.priority == 1
      ? "High"
      : obj.priority == 2
      ? "Medium"
      : obj.priority == 3
      ? "Low"
      : "Anytime"}
  </span>

  <span
    style={{
      marginLeft: "15px",
      padding: "6px 12px",
      borderRadius: "20px",
      color: "#fff",
      fontWeight: "bold",
      backgroundColor: obj.status ? "#10b981" : "#f97316",
    }}
  >
    {obj.status ? "✅ Complete" : "⏳ Incomplete"}
  </span>

  <button
    onClick={changeStatus}
    value={obj.id}
    style={{
      marginLeft: "15px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#3b82f6",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    }}
  >
    Change Status
  </button>

  <button
    onClick={removeTask}
    value={obj.id}
    style={{
      marginLeft: "10px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#ef4444",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    }}
  >
    Delete
  </button>

  {
    
    obj.status2 ?
     <button   style={{
      marginLeft: "15px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#91e179",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    }} onClick={donetask}>
            Done
          </button>
          :
        <button   style={{
      marginLeft: "15px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#91e179",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    }} onClick={edittask}>
            Edit
          </button>
  }

  {/* <button 
   style={{
      marginLeft: "15px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#91e179",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    }}
  // value={obj.id}
  onClick={edittask}>
    Edit
    </button>

     <button 
   style={{
      marginLeft: "15px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#91e179",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    }}
  // value={obj.id}
  onClick={donetask}>
    Done
    </button> */}

    {/* <h3>{obj.seconds} sec</h3>
    <h3>
    {Math.floor(obj.seconds / 60)} :
    {(obj.seconds % 60).toString().padStart(2, "0")}
    </h3>
    <button onClick={startTimer}>
    Start
    </button>

    <button onClick={pauseTimer}>
    Pause
    </button>

    <button onClick={resetTimer}>
    Reset
    </button> */}



</div>
  )
}
