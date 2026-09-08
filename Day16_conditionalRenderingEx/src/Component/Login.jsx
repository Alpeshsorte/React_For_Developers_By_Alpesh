import React, { useState } from 'react'
import Dashboard from './Dashboard'

const Login = () => {
    let[isLogin,setIslogin]=useState(false)

     if(isLogin){
        return <Dashboard/>

     }
     else{

     
  return (
    <div>
        <h1>This is Login Page</h1>
         <button onClick={()=>setIslogin(!isLogin)}>Login</button>
    </div>
  )
}
}

export default Login