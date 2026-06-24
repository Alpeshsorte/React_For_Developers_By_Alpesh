import React, { useState } from 'react'

export default function Input({setdata}) {

    let [inp, setinp]=useState("")
    let [opt, setoption]=useState("")
    
    function inpchange(event){
        let val=event.target.value
        setinp(val)

    }
    function selchange(event){
        setoption(event.target.value)

    }
    function addtask(){
            let obj={
                id:Date.now(),
                task:inp,
                priority:opt,
                status:false
            }
            // console.log(obj);
            setdata(obj)
            setinp("")
            setoption("")
    }

    function sortchange(){
        sortchange()
    }
    

  return (
    <div style={{width:'500px', height:'200px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', margin:'auto',backgroundColor:'red'}}>
        <input  style={{padding:'5px 5px',width:'60%',margin:'10px 10px', backgroundColor:'black',color:'white', borderRadius:'5px'}} onChange={inpchange}  value={inp} type="text" name="" id="" placeholder='Enter to do' />

        <select style={{padding:'5px 5px',width:'15%',margin:'10px 10px', backgroundColor:'yellow', borderRadius:'5px'}} onChange={selchange}  value={opt} name="" id="">
            <option value="">default</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <select style={{padding:'5px 5px',width:'15%',margin:'10px 10px', backgroundColor:'yellow', borderRadius:'5px'}} onChange={sortchange}  value={opt} name="" id="">
            <option value="">default</option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
        </select>
        <button style={{padding:'5px 5px', backgroundColor:'greenyellow',borderRadius:'5px'}} onClick={addtask} type="button">Submit</button>
    </div>
  )
}