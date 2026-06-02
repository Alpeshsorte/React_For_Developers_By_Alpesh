import React from 'react'

import './Test.css'

export default function Test(props) {


  // create dynamic card 

    return (
    <div className='card'>
        <img src={props.image} alt="" />
        <h1>{props.name}</h1>
        <h1>{props.dob}</h1>
    </div>
  )
}
