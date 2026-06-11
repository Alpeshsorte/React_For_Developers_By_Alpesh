import React from 'react'

export default function Detials({name,image,price,srno}) {
    
    return (
    <div   style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
    border: "5px solid #6eba27",
    borderRadius: "8px",
    margin: "10px 0",
    backgroundColor: 'pink',
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }}>
        <h3>{srno+1}</h3>
        <h3>{name}</h3>
        <img     style={{
      width: "50px",
      height: "50px",
      objectFit: "cover",
      borderRadius: "5px"
    }}
 src={image} alt="" />
        <h2>{price}</h2>
    </div>
  )
}
