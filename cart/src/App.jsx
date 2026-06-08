import React, { useState } from 'react'
import Cart from './component/Cart'
import './App.css'

export default function App() {
  let [data, setdata]=useState([

    {
      id:1,
      name:"laptop",
      price:"50000",
      quantity:"2",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqMkvqduNgoKh5VFLq8UjbHsuIGWcKcwC3w&s"
    },
     {
      id:2,
      name:"keyborad",
      price:"2000",
      quantity:"1",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhzAX72BQMTixuJiPNZxM4IUeg8f7xqPxkA&s"
    },
     {
      id:3,
      name:"mouse",
      price:"500",
      quantity:"9",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3qARXQdkyZYhkR35oeGLmLoIWjODSqbNbA&s"
    },
  ])
  // console.log(data.id);
  // let [count, setcount]=useState(0)
  // let [btn, setbtn]=useState(false)
  // function inc(){
  //   setcount(count+1)

  // }
  // function dec(){
  //    if(count>=1){
  //     setcount(count-=1)
  //   }else{
  //     setbtn(true)
      
  //   }
  // }

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
          {
            data.map(function(el){

             return <Cart image={el.image} key={el.id} name={el.name} price={el.price} quantity={el.quantity}/>

            })
          }
      </div>

      {/* <div id='btn'>
        <button onClick={dec}>-</button>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>

      </div> */}

    </div>
  )
}
