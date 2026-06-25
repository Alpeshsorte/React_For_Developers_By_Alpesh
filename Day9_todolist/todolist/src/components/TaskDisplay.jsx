import React from 'react'

export default function TaskDisplay({obj,srno,update}) {
    
  function handelStatus(event){
  let btnval=event.target.value

    console.log(update)
   let newData=update.alltodos.map((el,i,arr)=>{
               if(btnval==el.id)
               {
                  let obj={
                      id:el.id,
                      task:el.task,
                      priority:el.priority,
                      status: el.status ? false : true

                  }

                  return obj


               }else{
                return el
               }
   

   })

   update.setAlltodos(newData)

  }




    return (
    <div style={{
        width:"80%",
        border:"1px solid red",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    }}>
      <h1>{srno}</h1>
      <h2>{obj.task}</h2>
      <h2>{obj.priority=="" ? "anytime" : obj.priority}</h2>
      <button  onClick={handelStatus} value={obj.id} >{obj.status ? "compleated" :"incomplete"}</button>
     {console.log(obj)}

    </div>
  )
}
