import React from 'react'

import { useState } from 'react' 

// What is Destructuring?
// Destructuring is a JavaScript feature used to extract values from arrays or objects.

export default function Count() {

    let [count, change]=useState(0)

    let color=['red','pink','yellow','green','blue','orange']

    let [point, point_change]=useState(0)

    let [font, setfont]=useState(30)

    let arr_font = ['Times New Roman', 'Arial', 'Georgia', 'Courier New', 'Verdana', 'Impact'];

    function inc(){
        change(count+1)
        // point_change(count)
        // point_change((count+1) % color.length)
        // if(point >= color.length-1){
        //     print_change(0)
        // }else{
        //     point_change(point+1)
        // }

        // chnage_font(font)

        if(count%2==0){

            setfont(arr_font())

        }
    }

    function dec(){
        change(count-1)
        // point_change(count+1)
        // point_change((count+1) % color.length)
        // if(point<=0){
        //     point_change(color.length-1)
        // }else{
        //     point_change(point-1)
        // }

        // chnage_font(-font)

        if(count%2!=0){
            setfont(font-(count*2))
        }
    }

    function chnage_font(val){
        setfont(font+(val*2))
    }


  return (
    <div style={{width:'200px',display:'flex',margin:'auto', gap:'10px'}}>
        <button onClick={dec}>decriment</button>
        <h1 style={{color:color[point], fontSize:arr_font[font]}}>{count}</h1>
        <button onClick={inc}>incriment</button>
    </div>
  )
}
