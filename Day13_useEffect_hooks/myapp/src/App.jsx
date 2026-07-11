// import React from 'react'
// import Effect from './components/Effect'
// import Cart from './components/Cart'
// export default function App() {
//   return (
//     <div>
    
//       <Cart/>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import Effect from './components/Effect'
import Cart from './components/Cart'

export default function App() {
  
  let [count,setCount]=useState(0)
  let [timer,setTimer]=useState(true)
  
  useEffect(function(){

    console.log("the ano function is been called")
   console.log("...")
   console.log("state of timer is been changed")
  },[timer,count])
  
  useEffect(()=>{
     getData()
  },[])
  
  async function getData(){
     
    let data=await fetch("https://fakestoreapi.com/products")
    let actualData=await data.json()
    console.log(actualData)
  }
  return (
    <div>
          <h1>{count}</h1>
          <button onClick={()=>{
            setCount(count+1)
          }}>inc</button>
           
           <button onClick={()=>{
                
                setTimer(timer?false:true)

           }}>{timer ? "timer is true" : "timer is false"}</button>


           <Cart/>
    </div>
  )
}
