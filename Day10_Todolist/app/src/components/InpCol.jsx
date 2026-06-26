import React, { useState } from 'react'

export default function InpCol({task,setTask}) {
 
    let divstyle = {
        height:'50px',
        width:'95%',
        margin:'auto',
        boxShadow:' rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',borderRadius:'10px',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
    }

    let [Inp,setInp] = useState("")
    let [prio,setPrio] = useState("")

    function handleInp(event){
        setInp(event.target.value)
    }

    function handlePrio(event){
        setPrio(event.target.value)
    }

    function handleClick(){
        let obj = {
            id : Date.now(),
            name : Inp,
            priority : prio,
            status : false,
            isEditing : false,
            seconds: 0,
            isRunning: false
        }

        setInp("")
        setPrio("")
        let updateArray = [...task,obj]
        setTask(updateArray)
        console.log(updateArray)
    }
  return (

    <div
  style={{
    width: "85%",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
  }}
>
  <input
    style={{
      flex: 1,
      height: "50px",
      padding: "0 18px",
      fontSize: "17px",
      border: "2px solid #E0E0E0",
      borderRadius: "12px",
      outline: "none",
      backgroundColor: "#FAFAFA",
      color: "#333",
    }}
    onChange={handleInp}
    type="text"
    value={Inp}
    placeholder="📝 Enter Your To Do's"
  />

  <select
    style={{
      width: "140px",
      height: "50px",
      fontSize: "16px",
      border: "2px solid #E0E0E0",
      borderRadius: "12px",
      outline: "none",
      backgroundColor: "#FDF6E3",
      cursor: "pointer",
      padding: "0 10px",
    }}
    value={prio}
    onChange={handlePrio}
  >
    <option value="4">Default</option>
    <option value="1">🔴 High</option>
    <option value="2">🟡 Medium</option>
    <option value="3">🟢 Low</option>
  </select>

  <button
    style={{
      height: "50px",
      padding: "0 25px",
      border: "none",
      borderRadius: "12px",
      background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: Inp === "" ? "not-allowed" : "pointer",
      opacity: Inp === "" ? 0.6 : 1,
      transition: "0.3s",
    }}
    disabled={Inp === ""}
    onClick={handleClick}
  >
    ➕ Add Task
  </button>
</div>

  )
}
