import React from 'react'

const VotingChecker = () => {

    let age=10;
  return (
    <div>
         {
             age>=18 ? (<h1>Eligible for Voting</h1>):(<h1>Not Eligible for Voting</h1>)
         }

    </div>
  )
}

export default VotingChecker