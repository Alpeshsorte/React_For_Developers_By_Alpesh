import React, { useState } from 'react'

export default function Input() {

    let [inp, setinp]=useState("")
    let [opt, setoption]=useState("")
    
    function inpchange(event){
        let val=event.target.value
        setinp(val)

    }
    function selchange(event){
        setoption(event.target.value)

    }

    let obj={
        id:Date.now(),
        task:inp,
        priroty:opt,
        status:false
    }

    console.log(obj);
    

  return (
    <div style={{width:'500px', height:'500px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin:'auto',backgroundColor:'red'}}>
        <input  style={{padding:'5px 5px',width:'60%',margin:'10px 10px'}} onChange={inpchange} type="text" name="" id="" placeholder='Enter to do' />

        <select style={{padding:'5px 5px',width:'15%',margin:'10px 10px'}} onChange={selchange} name="" id="">
            <option value="">default</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button style={{padding:'5px 5px'}} type="button">Submit</button>
    </div>
  )
}