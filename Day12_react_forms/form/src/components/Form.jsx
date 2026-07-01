import React, { useState } from 'react'

    let obj={
        title:"",
        image:"",
        price:"",
        category:"",
        description:"",

    }

export default function Form() {

    let [formdata, setFormData]= useState(obj)

    function submitform(event){
        event.preventDefault()

        console.log(formdata);

        setFormData(obj)
        
        event.target.reset(); 
        
    }

    function handlechange(event){
        let name=event.target.name
        let value=event.target.value

        // to spraed the entriy object and put value in the object 
        setFormData({...formdata, [name]:value})

    }

  return (
    <div>
        <form onSubmit={submitform} style={{width:'300px',margin:'auto', display:'flex', flexDirection:"column", gap:'5px'}} action="">
            <input onChange={handlechange} type="text" name='title' placeholder='Enter product title'/>
            <input onChange={handlechange} type="url" name='image' placeholder='Enter product image'/>
            <input onChange={handlechange} type="number" name='price' placeholder='Enter product price'/>
            <select onChange={handlechange} name="category" id="">
                <option value="">Defalut</option>
                <option value="mens">mens</option>
                <option value="women">women</option>
                <option value="kids">kids</option>
            </select>
            <input onChange={handlechange} type="text" name="description" placeholder='Enter product description' id="" />
            <input  type="submit" name="" id="" />
        </form>
    </div>
  )
}
