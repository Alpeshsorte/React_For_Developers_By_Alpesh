import React, { useState } from 'react'
// import Item from './componenets/Item'
import Data from './componenets/Data'
import Cart from './componenets/Cart'
export default function App() {

  return (
    <div style={{display:"grid", gridTemplateColumns:'repeat(3,1fr)'}}>
       
        {/* // <Item/> */}
        <Data/>
        <Cart/>
    </div>
  )
}
