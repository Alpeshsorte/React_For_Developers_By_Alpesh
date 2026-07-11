// import React, { useState } from 'react'

// export default function Cart() {
//     let [product, setProduct]=useState([])
//     async function getdata() {
//         let data=await fetch("https://fakestoreapi.com/products")
//         let actualdata=await data.json()
//         // console.log(actualdata);
        
//         setProduct(actualdata)
        
        
//     }
//     getdata()
    
//     // console.log(product);
    

//   return (
//     <div>
//         {
//             product.map((item)=>{

                
                
//             })
//         }

//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import './cart.css'
export default function Cart() {
  const [product, setProduct] = useState([]);


  useEffect(()=> {
    getItemData()
  },[])


  const getItemData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const actualdata = await data.json();

    console.log("checkData", JSON.stringify(actualdata, null ,2) )
    setProduct(actualdata);
  };


  
//   async function getdata() {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const actualdata = await data.json();
//     setProduct(actualdata);
//   }

//   if (product.length === 0) {
//     getdata();
//   }

  return (
    <div className="product-grid">
      {product.map((item) => (
        <div className="product-card" key={item.id}>
          <img className="product-product-image" src={item.image} alt={item.title} width="100" />
          <h3 className="product-title">{item.title}</h3>
          <p className="product-price">₹ {item.price}</p>
          <p className="product-category">{item.category}</p>
          <p className="product-description">{item.description}</p>
          <p  style={{color:"red"}}className="product-category">{item.rating.rate},: {item.rating.count}</p>
        </div>
      ))}
    </div>
  );
}