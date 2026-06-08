import React, {useState} from 'react'
import './Cart.css'

export default function Cart(props) {
  let [count, setcount]=useState(0)
  let [btn, setbtn]=useState(false)
  let [total, settotal]=useState(0)


    function inc(){
      setcount(count+1)
  
    }
    function dec(){
       if(count>=1){
        setcount(count-1)
      }else{
        setbtn(true)
        
      }
    }

    function quan(event){
      console.log(props.quantity);
      

    }
  return (
    <div>
        <img src={props.image} alt="" />
        <h1>id={props.id}</h1>
        <h1>name={props.name}</h1>
        <h1>price={props.price}</h1>
        <h1>quantity={props.quantity}</h1>
        <div id='btn'>
            <button onClick={dec}>-</button>
            <h1>{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={quan}>total:-{total}</button>

      </div>
    </div>
  )
}
