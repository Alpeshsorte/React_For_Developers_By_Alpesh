import React from 'react'
import Detials from './Detials'
import Count from './Count'
export default function ({data,index}) {
     console.log(index)
    return (
    <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: "15px auto",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
  }}>
          <Detials image={data.image} price={data.price} name={data.name} srno={index} />
          <Count/>

    </div>
  )
}

