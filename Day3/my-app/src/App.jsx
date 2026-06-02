import React from 'react'
import Test from './component/Test'
import "./App.css"

export default function App() {

  // let containerStyle={display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"20px"}

  return (
    <div>
      <div className='container' style={{color:"pink"}}>
        <Test/>
        <Test/>
        <Test/>
        <Test/>
        <Test/>
        <Test/>
        <Test/>
        <Test/>
      </div>
    </div>
  )
}
