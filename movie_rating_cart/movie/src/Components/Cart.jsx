import React from 'react'
import Rating from './Rating'
import './Cart.css'
export default function Cart({image, name}) {
  return (
    <div className="cart">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <Rating/>
    </div>
  )
}
