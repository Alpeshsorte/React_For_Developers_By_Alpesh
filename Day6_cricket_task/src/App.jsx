import React, { useState } from 'react'
import Cri from './component/Cri'
import './App.css'

export default function App() {

  let [totalrun, setrun]=useState(0)
  let [totalwicket, setwicket]=useState(0)

  function incrun(event){
    let val=+event.target.innerText 
    let total=totalrun+val
    setrun(total)

  }

  function incwek(event){
    let w=+event.target.innerText
    if(totalwicket<10){
      setwicket(totalwicket+=w)      
      
    }


  }

  return (


      <div className="score-board-container">
        <h1 className="section-title">runs</h1>
        <div className="btn-group">
            <button onClick={incrun}>1</button>
            <button onClick={incrun}>2</button>
            <button onClick={incrun}>3</button>
            <button onClick={incrun}>4</button>
            <button onClick={incrun}>6</button>
        </div>

        <h1 className="section-title">wicket</h1>
            <div className="btn-group">
                 <button onClick={incwek}>1</button>

            </div>
      <div className="results-display">
          <h1 className="display-text">total score:---{totalrun}</h1>
          <h1 className="display-text">total wicket:---{totalwicket}</h1>
        

      </div>


      </div>
  )
}
