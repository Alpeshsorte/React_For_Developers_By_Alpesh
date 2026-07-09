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
    let [sec,setSec]=useState(100)
    let timer=useRef("")

    useEffect(()=>{
         timer.current=setInterval(() => {
           setSec(function(prev){
                console.log(prev)
            return prev+1
           })              
        }, 1000);

         return  ()=>{

           clearInterval(timer.current)
         }

    },[])


    function one(){
      setSec((prev)=>prev+60)
    }
    function five(){
       setSec((prev)=>prev+300)

    }
    function ten(){
       setSec((prev)=>prev+600)
    }
  
  return (
    <div style={{margin:"auto",width:"300px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}} >
      
       <h1>{ findHr(sec)}</h1>
       <h3>:</h3>
       <h1>{findmin(sec)}</h1>
       <h3>:</h3>
       <h1>{findSec(sec)}</h1>

       <button onClick={one}>+1</button>
       <button onClick={five}>+5</button>
       <button onClick={ten}>+10</button>

    </div>
  )
}



