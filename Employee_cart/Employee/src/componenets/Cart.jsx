import React from 'react'
import Toggle from './Toggle'

export default function Cart({name, salary, department }) {
  return (
    <div
       style={{
    width: "320px",
    padding: "20px",
    margin: "15px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    border: "1px solid #e5e7eb",
    transition: "0.3s ease",
    textAlign: "center",
  }}
    >
      <h2 style={{
      color: "#1f2937",
      marginBottom: "10px"
    }}>{name}</h2>
      <h3>{salary}</h3>
      <p>{department}</p>

      <Toggle />
    </div>
  )
}