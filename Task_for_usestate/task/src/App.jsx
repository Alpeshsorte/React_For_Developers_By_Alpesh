import React, { useState } from 'react'
import Cart from './component/Cart'

import './App.css'
export default function App() {

  // let [count, setcount]=useState(0)

  // function inc(event){
  //   setcount(count+1)
  // }
  // function dec(){
  //   setcount(count-=1)
  // }
  // function reset(){
  //   setcount(0)
  // }

  // let [student, setstudent]=useState([
  //   {
  //     name:"alpesh",
  //     age:21,
  //     couser:"devvelpment"
  //   },
  //   {
  //     name:"sharvesh",
  //     age:23,
  //     couser:"reral estate"
  //   },
  //   {
  //     name:"amol",
  //     age:22,
  //     couser:"gorment"
  //   }
  // ])

  // 6. Employee Card

  let [Employee, setemployee]=useState([
    {
      name:"alpesh",
      desgination:"software developer",
      salary:2343324,
    },
     {
      name:"roshan",
      desgination:"react developer",
      salary:2342334,
    },
     {
      name:"snehal",
      desgination:"Data ananylist",
      salary:2122344,
    },
  ])

  return (
    // <div>
    //   <div id='A'>
    //     <button onClick={inc}>+</button>
    //     <h1>{count}</h1>
    //     <button onClick={dec}>-</button>
    //     <button onClick={reset}>Reset</button>
    //   </div>
    //   <Cart/>
    // </div>


    <div>App

      {/* <div>
        {
          student.map(function(el,arr,i){
            return <Cart name={el.name} age={el.age} couser={el.couser}/>
          })
        }
      </div> */}

      <div id='container'>
        {
          Employee.map(function(el,arr,i){
            return <Cart name={el.name} desgination={el.desgination} salary={el.salary}/>
          })
        }
      </div>
      
    </div>
  )
}
