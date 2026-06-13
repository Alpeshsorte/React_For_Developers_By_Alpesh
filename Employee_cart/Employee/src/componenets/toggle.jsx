import React, { useState } from 'react'

export default function toggle() {
    let [toggle, settoggle]=useState(false)

  return (
    <div>toggle
        <button>Enrolled</button>
        <button>UnEnrolled</button>
    </div>
  )
}
