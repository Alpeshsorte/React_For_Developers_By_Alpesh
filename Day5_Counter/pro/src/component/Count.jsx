import React from 'react'

import { useState } from 'react' 

// What is Destructuring?
// Destructuring is a JavaScript feature used to extract values from arrays or objects.

export default function Count() {

    let [count, change]=useState(0)

    let color=['red','pink','yellow','green','blue','orange']

    let [point, point_change]=useState(0)

    function inc(){
        change(count+1)
        // point_change(count)
        point_change((count+1) % color.length)
    }

    function dec(){
        change(count-1)
        // point_change(count+1)
        point_change((count+1) % color.length)
    }
  return (
    <div style={{width:'200px',display:'flex',margin:'auto', gap:'10px'}}>
        <button onClick={dec}>decriment</button>
        <h1 style={{color:color[point]}}>{count}</h1>
        <button onClick={inc}>incriment</button>
    </div>
  )
}
