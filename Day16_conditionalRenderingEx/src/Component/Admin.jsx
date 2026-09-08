import React from 'react'

const Admin = () => {

    let isAdmin=false;
    let username="Sam";
  return (
    <div>
        {
            isAdmin && <button>Delete Student</button>
        }

        {
              <h1>{username || "Guest User"}</h1>
        }
    </div>
  )
}

export default Admin