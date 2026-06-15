import React, { useState } from 'react'
import Cart from './Cart'

export default function Data() {
  const [employee] = useState([
    {
      name: "alpesh",
      salary: "200000",
      department: "software development"
    },
    {
      name: "sanket",
      salary: "900000",
      department: "project manager"
    },
    {
      name: "shail",
      salary: "700000",
      department: "business person in data loading"
    },
        {
      name: "pappu",
      salary: "744000",
      department: "choclate factory"
    },
        {
      name: "bheem",
      salary: "70000",
      department: "durg mafiya"
    }
  ])

  return (
    <div>
      {employee.map((emp, index) => (
        <Cart
          key={index}
          name={emp.name}
          salary={emp.salary}
          department={emp.department}
        />
      ))}
    </div>
  )
}