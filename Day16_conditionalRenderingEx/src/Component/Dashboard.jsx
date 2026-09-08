import React, { useState } from 'react'
import Login from './Login'

const Dashboard = () => {
    let[isLogin,setIslogin]=useState(true)

    if(isLogin)
  {
    return (
    <div>
        <h1>Welcome To Dashboard</h1>
        <button onClick={()=>setIslogin(false)}>Logout</button>
    </div>
  )
  }
  else{
    return <Login/>
  }
}

export default Dashboard