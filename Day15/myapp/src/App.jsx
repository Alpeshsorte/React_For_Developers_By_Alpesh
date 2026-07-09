import React, { use, useState } from 'react'
import Timer from './components/Timer'

export default function App() {
  
  let [display,setDisplay]=useState(true)

  function handleDisplay(){
           setDisplay(display ? false : true)

           
  }
  
  return (
    <div>
       {display && <Timer/>}
        <button onClick={handleDisplay}>hide Timer</button>
    </div>
  )
}
