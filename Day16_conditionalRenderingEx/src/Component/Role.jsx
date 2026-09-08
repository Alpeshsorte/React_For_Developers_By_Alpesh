import React from 'react'

const Role = () => {
  const role = "";

  switch(role){

        case "Admin":
            return <h1>Admin Dashboard</h1>;

        case "Student":
            return <h1>Student Dashboard</h1>;

        default:
            return <h1>Guest Dashboard</h1>;
    }

}

export default Role