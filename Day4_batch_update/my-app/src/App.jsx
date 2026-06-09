// import React from 'react'
// import Test from './component/Test'
// // import "./App.css"

// export default function App() {

//   // let containerStyle={display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"50px"}
//       let team=[
//         {
//             image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
//             name:"Cristiano Ronaldo",
//             dob:"5 February 1985"
//         },
//          {
//             image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
//             name:"Cristiano Ronaldo",
//             dob:"5 February 1985"
//         },
//          {
//             image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
//             name:"Cristiano Ronaldo",
//             dob:"5 February 1985"
//         },
//          {
//             image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
//             name:"Cristiano Ronaldo",
//             dob:"5 February 1985"
//         },
//          {
//             image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
//             name:"Cristiano Ronaldo",
//             dob:"5 February 1985"
//         },
//          {
//             image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
//             name:"Cristiano Ronaldo",
//             dob:"5 February 1985"
//         },
//     ]

    

//   return (
//     <div>

//       <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
//         {
//           team.map(function(el,i,arr){
//             return <Test image={el.image} name={el.name} dob={el.dob} />
//           })
//         }
//       </div>
//     </div>
//   )
// }


// defination of batch update 
// answer:- Batching in React is a performance optimization mechanism that groups multiple state updates together 
// into a single re-render cycle instead of rendering the component for every individual state change. 
// This heavily reduces performance bottlenecks and avoids rendering "half-finished" UI states.


// perform the operation in to last stage exeuate last batch update 
import React from 'react'

import Test from './component/Test'
export default function App() {
  return (
    <div>App
      <Test/>
      <Test/>
    </div>
  )
}
