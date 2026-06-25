import React, { useState } from 'react'

export default function InpCol({alltodos,setAlltodos}) {
  
  let [inpval,setInpval]=useState("")
  let [priority,setPriority]=useState("")
  // let [btnStatus,setBtnStsatus ]=useState(true)

   function handleChange(event){
console.log("handleChange is been called")
    
  setInpval(event.target.value)

   }

   function handlePrio(event){
      
    setPriority(event.target.value)
  
   }
  
   function handleClick(){

   let obj={
    id:Date.now(),
    task:inpval,
    priority,
    status:false
   }
    
   console.log(obj)
   setInpval("")
   setAlltodos([...alltodos,obj])
   }
  
    return (
    <div style={{
        width:"90%",
        height:'70px',
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        margin:"50px",
        display:"flex",
        justifyContent:'space-evenly',
        alignItems:"center"
    }}>
        <input value={inpval} onChange={handleChange}  style={{width:"60%",fontSize:"30px"}} type="text"   name="" id=""  placeholder='enter the task to add to todo list'/>
        <select onChange={handlePrio} name="" id="">
            <option value="">Default</option>
              <option value="high">High</option>
                <option value="medium">Medium</option>
                  <option value="low">Low</option>
        </select>
        <button disabled={inpval==""?true : false} onClick={handleClick}>Add Todo</button>
    </div>
  )
}
