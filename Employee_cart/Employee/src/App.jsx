import React, { useState } from 'react'

export default function App() {
    let [employee, setemployee]=useState([
        {
            name:"alpesh",
            salary:"200000",
            department:"software devewlopment"
        },
        {
            name:"sanket",
            salary:"900000",
            department:"project manager"
        },
        {
            name:"shail",
            salary:"700000",
            department:"business person in data loading "
        },
    ])
  return (
    <div>App welcome to the app compnenets </div>
  )
}
