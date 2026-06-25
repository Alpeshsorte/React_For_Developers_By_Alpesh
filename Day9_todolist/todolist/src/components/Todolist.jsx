import React, { useState } from 'react'
import InpCol from './InpCol'
import TaskCol from './TaskCol'

export default function Todolist() {
  let divStyle={
        width:"600px",
        height:"700px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        margin:"auto"
    }
  
    let [alltodos,setAlltodos]=useState([])
  
    return (
    <div  style={divStyle}  >
        <InpCol  alltodos={alltodos} setAlltodos={setAlltodos} />
         <TaskCol data={alltodos} update={{alltodos,setAlltodos}}/>
    </div>
  )
}
