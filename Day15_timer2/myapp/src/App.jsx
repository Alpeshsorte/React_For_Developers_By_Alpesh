import React, { use, useState } from 'react'
import Timer from './components/Timer'

export default function App() {
  
  let [display,setDisplay]=useState(true)

  function handleDisplay(){
           setDisplay(display ? false : true)

           
  }
  
  return (
    <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  gap: "20px",
  backgroundColor: "#f0f2f5",
  fontFamily: "system-ui, sans-serif"
}}>
       {display && <Timer/>}
        <button     style={{
      padding: "10px 20px",
      fontSize: "0.95rem",
      fontWeight: "500",
      color: "#ffffff",
      backgroundColor: display ? "#65676b" : "#007bff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "background-color 0.2s ease, transform 0.1s ease"
    }}
    onClick={handleDisplay}>hide Timer</button>
    </div>
  )
}
