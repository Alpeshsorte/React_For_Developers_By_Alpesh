import React, { useState } from 'react'

export default function Toggle() {
  const [enrolled, setEnrolled] = useState(false)

  return (
    <button   style={{
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: enrolled ? "#22c55e" : "#ef4444",
    color: "white"
  }} onClick={() => setEnrolled(!enrolled)}>
      {enrolled ? "Enrolled" : "UnEnrolled"}
    </button>
  )
}