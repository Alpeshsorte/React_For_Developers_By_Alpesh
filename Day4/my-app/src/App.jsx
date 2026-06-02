import React from 'react'
import Test from './component/Test'
// import "./App.css"

export default function App() {

  // let containerStyle={display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"50px"}
      let team=[
        {
            image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
            name:"Cristiano Ronaldo",
            dob:"5 February 1985"
        },
         {
            image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
            name:"Cristiano Ronaldo",
            dob:"5 February 1985"
        },
         {
            image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
            name:"Cristiano Ronaldo",
            dob:"5 February 1985"
        },
         {
            image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
            name:"Cristiano Ronaldo",
            dob:"5 February 1985"
        },
         {
            image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
            name:"Cristiano Ronaldo",
            dob:"5 February 1985"
        },
         {
            image:"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2234200789.jpg?c=original&q=w_860,c_fill",
            name:"Cristiano Ronaldo",
            dob:"5 February 1985"
        },
    ]


  return (
    <div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {
          team.map(function(el,i,arr){
            return <Test image={el.image} name={el.name} dob={el.dob} />
          })
        }
      </div>
    </div>
  )
}
