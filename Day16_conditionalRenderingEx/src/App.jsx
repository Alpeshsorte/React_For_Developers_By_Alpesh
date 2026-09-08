import { useState } from 'react'
import './App.css'
import Dashboard from './Component/Dashboard'
import Login from './Component/Login'
import VotingChecker from './Component/VotingChecker'
import Admin from './Component/Admin'
import Role from './Component/Role'

function App() {
  let[isLogin,setIslogin]=useState(false)

  if(isLogin){

    return <Dashboard/>
  }
  else{
      return <Login/>
  }


  return(
    <>
       <VotingChecker/>

       <Admin/>

       <Role/>
    </>
  )

 
}

export default App
