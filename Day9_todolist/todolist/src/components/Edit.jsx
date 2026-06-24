import React, { useState } from 'react'

export default function Edit({task, updateTask}) {
    let [name, setname]=useState(task.task)
    let [priority, serpriority]=useState(task.updateTask)
    
    function savetask(){
      let updatedTask={...task, task:name, priority:priority}
      updateTask(updatedTask)
    } 

  return (
        <div>

      <h2>Edit Task</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button onClick={saveTask}>
        Save
      </button>

    </div>
  )
}
