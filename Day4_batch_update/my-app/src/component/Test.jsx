// import React from 'react'

// import './Test.css'

// export default function Test(props) {


//   // create dynamic card 
  

//     return (
//     <div className='card'>
//         <img src={props.image} alt="" />
//         <h1>{props.name}</h1>
//         <h1>{props.dob}</h1>
//     </div>
//   )
// }


// Batch Update in React (Definition)

// Batch Update in React means React groups multiple state updates together and performs a single re-render instead of re-rendering after each update.

// This improves performance because React reduces unnecessary rendering.

// Why React Uses Batch Updates?
// Improves performance
// Reduces unnecessary re-renders
// Makes the UI faster and smoother
// Interview Definition

// Batching in React is the process of grouping multiple state updates into a single re-render cycle to improve application performance and avoid unnecessary renders.


import React, { useState } from 'react'

export default function Test() {

  let [count, setcount]= useState(0)
  function inc(){
    setcount((prev)=>{
      return prev+1
    })
    setcount((prev)=>{
      return prev+1
    })
    setcount((prev)=>{
      return prev+1
    })
    setcount((prev)=>{
      return prev+1
    })
  }
  function dec(){
    // use this arrow function for update and return the value in one state 
    setcount((prev)=>{
      return prev-1
    })
    setcount((prev)=>{
      return prev-1
    })
    setcount((prev)=>{
      return prev-1
    })
    setcount((prev)=>{
      return prev-1
    })
  }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
      <button onClick={dec}>-</button>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
    </div>
  )
}
