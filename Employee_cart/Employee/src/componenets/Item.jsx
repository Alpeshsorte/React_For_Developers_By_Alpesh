import React from 'react'
import Cart from './Cart'
import toggle from './toggle'
export default function Item() {
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
            }
        ])
  return (
    <div>Item
        {
            employee.map(function(el,arr,i){
               return <Cart name={el.name} salary={el.salary} department={el.department}/>
            })
        }
        <Cart/>
        <toggle/>
    </div>
  )
}
