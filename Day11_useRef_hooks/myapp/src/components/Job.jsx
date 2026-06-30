import React, { useState } from 'react'

export default function Job() {

    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])

    function change(event) {
        setInput(event.target.value)
    }

    function click() {

        if (input.trim() === "") return;

        setTasks([...tasks, input])

        setInput("")
    }

    return (
        <div
            style={{
                width: "300px",
                minHeight: "300px",
                border: "2px solid red",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "10px"
            }}
        >
            <h1>My Job</h1>

            <input
                type="text"
                value={input}
                onChange={change}
                placeholder="Enter task"
            />

            <button onClick={click}>Submit</button>

            <hr />
            {tasks.map((task, index) => (
                <p key={index}>
                    {index + 1}. {task}
                </p>
            ))}
        </div>
    )
}