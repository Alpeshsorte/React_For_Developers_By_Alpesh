import React from 'react'
import Count from './component/Count'

// import Count from './component/Count'

export default function App() {

  // let [val, setCount]=React.useState(0);

  // function handalCount(){
  //   setCount(val+1)
  //   console.log("inside function-"+val)
  // }

  return (
    // <div>
    //   {
    //     console.log(val)
    //   }
    //   <button onClick={handalCount}>change value</button>
    // </div>
    <div>
      <Count/>
    </div>
  )
}
