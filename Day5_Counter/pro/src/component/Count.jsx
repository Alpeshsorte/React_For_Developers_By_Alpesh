// what is hooks 
// Hooks are special functions that let you use React features like state, lifecycle methods, and context in functional components.

// useState is a React Hook that allows a component to store and update data (state). When the state changes, React automatically updates the UI.

import React, { use } from 'react'

import { useState } from 'react' 

// What is Destructuring?
// Destructuring is a JavaScript feature used to extract values from arrays or objects.

export default function Count() {

    let [count, change]=useState(0)

    let color=['red','pink','yellow','green','blue','orange']

    let [point, point_change]=useState(0)

    let [font, setfont]=useState(30)

    let arr_font = ['Times New Roman', 'Arial'];

    let [text, settext]=useState("Alpesh")

    let [btn, setbtn]=useState(false)

    function inc(){
        change(count+1)
        point_change(count)
        point_change((count+1) % color.length)
        if(point >= color.length-1){
            print_change(0)
        }else{
            point_change(point+1)
        }

        chnage_font(font)

        chnage_font(+2)

        // if(count%2==0){
        //     setfont(arr_font())
        // }

        if(count>=4){
            alert("react developer ")
            setbtn(true)
        }

    }

    function dec(){
        change(count-1)
        point_change(count+1)
        point_change((count+1) % color.length)
        if(point<=0){
            point_change(color.length-1)
        }else{
            point_change(point-1)
        }

        chnage_font(-font)

        chnage_font(-2)

        // if(count%2!=0){
        //     setfont(font-(count*2))
        // }

    
    }

    function chnage_font(val){
        setfont(font+(val*2))
    }

    function text_change(res){
        settext()

    }

  return (
    <div style={{width:'200px',display:'flex',margin:'auto', gap:'10px'}}>
        <button onClick={dec}>decriment</button>
        <h1 style={{color:color[point], fontSize:font, fontFamily: arr_font[font % 2 ===0] ?  "Arial" : "Courier New" }}>{count}</h1>
        <h1 style={{color:color[point], fontSize:font, fontFamily: arr_font[font % 2 ===0] ?  "Arial" : "Courier New" }}>{text}</h1>
        <button disabled={btn} onClick={inc}>incriment</button>
    </div>
  )
}
