import React, { use, useEffect, useRef, useState } from 'react'

function findHr(sec){
   let abc=Math.floor(sec/3600);   
  return converter(abc)
}

function findmin(sec){
   let abc=Math.floor((sec-(findHr(sec)*3600))/60)
    return converter(abc)
}

function findSec(sec){
    let abc=sec%60
      return  converter(abc)
}

function converter(data){
  if(data<=9)
  {
      return `0${data}`
  }else{
    return data
  }
}

export default function Timer() {
    let [sec,setSec]=useState(0)
    let [runn, setrunn]=useState(false)
    let timer=useRef("")

    useEffect(()=>{
      if(runn){
        timer.current=setInterval(() => {
          setSec(function(prev){
               console.log(prev)
               return prev+1
             })              
           }, 1000);

      }
           
           return  ()=>{
             
             clearInterval(timer.current)
             

        }
    },[runn])


    function one(){
      setSec((prev)=>prev+60)
    }
    function five(){
       setSec((prev)=>prev+300)

    }
    function ten(){
       setSec((prev)=>prev+600)
    }

    function restart(){
      setSec(0)
    }

    function ruk(){
      clearInterval(timer.current)
      setrunn(false)
    }

    function chalu(){
      setrunn(true)

    }
  
  return (
//     <div  style={{
//   maxWidth: "400px",
//   margin: "40px auto",
//   padding: "20px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "24px",
//   alignItems: "center",
//   backgroundColor: "#f7f9fc",
//   borderRadius: "16px",
//   boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)"
// }}>
      
//        <h1>{ findHr(sec)}</h1>
//        <h3>:</h3>
//        <h1>{findmin(sec)}</h1>
//        <h3>:</h3>
//        <h1>{findSec(sec)}</h1>

//        <button onClick={one}>+1</button>
//        <button onClick={five}>+5</button>
//        <button onClick={ten}>+10</button>
//         <button onClick={chalu}>start</button>
//        <button onClick={restart}>Restart</button>
//        <button onClick={ruk}>Stop</button>

//     </div>

<div style={{
  maxWidth: "400px",
  margin: "40px auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  backgroundColor: "#f7f9fc",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)"
}}>
  
  {/* Timer Display */}
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "monospace",
    fontSize: "2rem",
    color: "#2c3e50"
  }}>
    <h1>{findHr(sec)}</h1> <h3>:</h3>
    <h1>{findmin(sec)}</h1> <h3>:</h3>
    <h1>{findSec(sec)}</h1>
  </div>

  {/* Control Buttons */}
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px"
  }}>
    <button onClick={one} >+1</button>
    <button onClick={five} >+5</button>
    <button onClick={ten} >+10</button>
    <button onClick={chalu} style={{ backgroundColor: "#3498db", color: "#fff"}}>start</button>
    <button onClick={restart} style={{backgroundColor: "#f39c12", color: "#fff"}}>Restart</button>
    <button onClick={ruk} style={{backgroundColor: "#e74c3c", color: "#fff"}}>Stop</button>
  </div>
  
</div>

  )
}



