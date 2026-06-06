import React, { useState } from 'react'
import './Cart.css'
export default function cart(props) {

  // let [age, setage]=useState(1)
  // let [btn, setbtn]=useState(false)
  // function incage(){
  //   setage(age+=1)
  // }
  // function decage(){
  //   if(age>1){
  //     setage(age-=1)
  //   }else{
  //     setbtn(true)
      
  //   }
  // }
  
  return (
    <div>
      {/* <h1>age controller</h1>

      <div id='box'>
        <button disabled={btn} onClick={decage}>-</button>
        <h1>{age}</h1>
        <button onClick={incage}>+</button>

      </div> */}
{/* 
          <h1>name={props.name}</h1>
          <h1>age={props.age}</h1>
          <h1>couser={props.couser}</h1> */}

          <div id='cart'>
            <h1>name={props.name}</h1>
            <h1>desgination={props.desgination}</h1>
            <h1>salary={props.salary}</h1>

          </div>

    </div>
  )
}
