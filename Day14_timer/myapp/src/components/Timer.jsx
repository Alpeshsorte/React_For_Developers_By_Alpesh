import React, { use, useEffect, useState } from 'react'

function findHr(sec){
    return Math.floor(sec/3600)

}

function findmin(sec){
    return Math.floor((sec-(findHr(sec)*3600))/60)
}

function findSec(sec){
    return sec%60
}

export default function Timer() {
    let [sec,setSec]=useState(0)

    useEffect(()=>{
      startTimer()
    },[])

    function startTimer(){
       
        setInterval(() => {
           setSec(function(prev){
              
            return prev-1

           }) 
           console.log(sec)
        }, 1);

    }
      


  
  return (
    <div style={{margin:"auto",width:"300px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}} >
      
       <h1>{findHr(sec)}</h1>
       <h3>:</h3>
       <h1>{findmin(sec)}</h1>
       <h3>:</h3>
       <h1>{findSec(sec)}</h1>



    </div>
  )
}