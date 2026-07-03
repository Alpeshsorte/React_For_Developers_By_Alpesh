import React, { useState } from 'react'

export default function Effect() {

  let [count, setCount]=useState(0)
  // let [time, setTimer]=useState(0)

  async function getdata(params) {

    let data=await fetch("https://fakestoreapi.com/products")
    let res=await data.json()
    console.log(res);
  }

  // function extimer(){
  //   setInterval(() => {
  //     setTimer(time+1)
      
  //   }, 1000);
  // }
  // extimer()
  getdata()


  // function 
  return (
    <div>
        <h1>{count}</h1>
        {/* <h1>{time}</h1> */}
        <button onClick={()=>{setCount(count+1)}}>click</button>


    </div>
  )
}
