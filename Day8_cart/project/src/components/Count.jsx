import React, { useState } from 'react'

export default function Count() {
   let [count,setCount]=useState(0)
  
   function handleInc(){
           
     setCount(count+1)

   }
function handleDec(){
    if(count>0){
        setCount(count-1)
    }
}   
 console.log(count)  
    
    return (
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"150px", border:"1px solid red"}}>
           <button onClick={handleDec}>-</button>
         <h4>{count}</h4>
            <button onClick={handleInc}>+</button>
        
    </div>
  )
}
