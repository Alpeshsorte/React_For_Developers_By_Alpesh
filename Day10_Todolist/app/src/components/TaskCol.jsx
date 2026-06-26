import React, { useState } from 'react'
import TaskItem from './TaskItem'


export default function TaskCol({todos,Task}) {

  let [sort,setSort] = useState('')
  let [filter,setFilter] = useState('')

  function sortTask(event){
    let value = event.target.value

    if (value=='htl'){
      let updatedArr = [...todos].sort((a,b)=>{
        return a.priority- b.priority
      })
      Task.setTask(updatedArr)
    }
    
    else if(value=='lth'){
      let updatedArr = [...todos].sort((a,b)=>{
        return b.priority-a.priority
      })
      Task.setTask(updatedArr)
    }
  }

  function filterTask(event){
     let value = event.target.value
     console.log(value)

     if(value == 'at'){
      let updatedArr = Task.task.map((el,i)=>{
        return el
      })
      Task.setTask(updatedArr)
      console.log(updatedArr)
     }
     else if(value == 'com'){
      let updatedArr = Task.task.filter((el,i)=>{
        return el.status == true
      })
      Task.setTask(updatedArr)
      console.log(updatedArr)
     }
     else if(value == 'incom'){
      let updatedArr = Task.task.filter((el)=>{
        return el.status == false
      })
      Task.setTask(updatedArr)
      console.log(updatedArr)
     }
  }
  
  return (
    <div
  style={{
    width: "95%",
    margin: "20px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  }}
>
  {/* Header */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
      paddingBottom: "15px",
      borderBottom: "2px solid #f1f5f9",
    }}
  >
    <h2
      style={{
        margin: 0,
        color: "#374151",
        fontSize: "28px",
        fontWeight: "700",
        letterSpacing: "1px",
      }}
    >
      📋 Task Dashboard
    </h2>

    <div
      style={{
        display: "flex",
        gap: "12px",
      }}
    >
      <select
        onChange={sortTask}
        value={sort}
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          border: "2px solid #d1d5db",
          fontSize: "15px",
          cursor: "pointer",
          outline: "none",
          background: "#f9fafb",
        }}
      >
        <option value="">🔃 Sort</option>
        <option value="htl">⬇ High to Low</option>
        <option value="lth">⬆ Low to High</option>
      </select>

      <select
        onChange={filterTask}
        value={filter}
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          border: "2px solid #d1d5db",
          fontSize: "15px",
          cursor: "pointer",
          outline: "none",
          background: "#f9fafb",
        }}
      >
        <option value="">📂 Filter</option>
        <option value="at">📋 All Tasks</option>
        <option value="com">✅ Completed</option>
        <option value="incom">⏳ Incomplete</option>
      </select>
    </div>
  </div>

  {/* Task List */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      maxHeight: "450px",
      overflowY: "auto",
      paddingRight: "5px",
    }}
  >
    {todos.map((el, i) => (
      <TaskItem
        key={el.id}
        obj={el}
        srno={i + 1}
        Task={Task}
      />
    ))}
  </div>
</div>
  )
}
