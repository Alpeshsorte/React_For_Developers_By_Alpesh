import React from 'react'
import TaskDisplay from './TaskDisplay'

export default function TaskCol({data,update}) {

      
    return (

    <div>
      
      
       {
          data.map((el,i,arr)=>{
              return  <TaskDisplay update={update} key={el.id} obj={el} srno={i+1}/>
          })
       }
    
    </div>
  )
}
