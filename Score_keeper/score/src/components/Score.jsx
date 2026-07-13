// import React, { useState } from 'react'

// export default function Score() {
//     let [first, setfirst]=useState(0)
//     let [second, setsecond]=useState(0)

//     function teamone(){
//         setfirst(first+1)

//     }

//     function teamtwo(){
//         setsecond(second+1)

//     }
//   return (
//     <div
//       style={{
//         width: '350px',
//         minHeight: '320px',
//         backgroundColor: '#e0fbfc',
//         margin: 'auto',
//         padding: '20px',
//         boxSizing: 'border-box',
//         borderRadius: '8px',
//       }}
//     >
//       <div
//         style={{
//           margin: 'auto',
//           boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
//           backgroundColor: 'white',
//           borderRadius: '12px',
//           padding: '24px 16px',
//           textAlign: 'center',
//         }}
//       >
//         <h1
//           style={{
//             color: '#0d7377',
//             fontWeight: 'bold',
//             margin: '0 0 20px 0',
//           }}
//         >
//           Score Keeper
//         </h1>

//         <h3
//           style={{
//             fontWeight: 'bold',
//             color: '#1b2a41',
//             margin: '0 0 12px 0',
//           }}
//         >
//           Team One: {first}
//         </h3>
//         <button
//           style={{
//             fontWeight: 'bold',
//             backgroundColor: '#0d7377',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '10px 18px',
//             cursor: 'pointer',
//           }}
//           onClick={teamone}
//         >
//           +1 Team One
//         </button>

//         <h3
//           style={{
//             fontWeight: 'bold',
//             color: '#1b2a41',
//             margin: '24px 0 12px 0',
//           }}
//         >
//           Team Two: {second}
//         </h3>
//         <button
//           style={{
//             fontWeight: 'bold',
//             backgroundColor: '#0d7377',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             padding: '10px 18px',
//             cursor: 'pointer',
//           }}
//           onClick={teamtwo}
//         >
//           +1 Team Two
//         </button>
//       </div>
//     </div>
//   )
// }



import React, { useState } from 'react'
import './score.css'

export default function Score() {

    let obj = {
        first: "",
        last: "",
        full:"",
        email: "",
        contact: "",
        gender: "",
        subject: "",
        resume: null,
        url: "",
        description: ""
    }

    let [form, setform] = useState(obj)

    function handlechange(event) {

        let { name, value, files, type } = event.target

        if (type === "file") {
            setform({ ...form, [name]: files[0] })
        } else {
            setform({ ...form, [name]: value })
        }
    }

    function handlesubmit(event) {
        event.preventDefault()

        console.log(form)

        setform(obj)
        event.target.reset()
    }

    function handlereset() {
        setform(obj)
    }


    return (
        <div
            className='container'
            style={{
                width: '400px',
                height: 'auto',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                margin: 'auto',
                textAlign: 'center'
            }}
        >

            <h1>React Form</h1>

            <form onSubmit={handlesubmit}>

                <h3>First Name</h3>
                <input
                    onChange={handlechange}
                    type="text"
                    name="first"
                    placeholder="Enter your first name"
                />

                <h3>Last Name</h3>
                <input
                    onChange={handlechange}
                    type="text"
                    name="last"
                    placeholder="Enter your last name"
                />
                <h3>full name</h3>
                <input type="text" name='fullname' placeholder='Enter full name? ' />

                <h3>Email</h3>
                <input
                    onChange={handlechange}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />

                <h3>Contact</h3>
                <input
                    onChange={handlechange}
                    type="number"
                    name="contact"
                    placeholder="Enter your contact number"
                />

                <h3>Gender</h3>

                <label>
                    <input
                        onChange={handlechange}
                        type="radio"
                        name="gender"
                        value="Male"
                    />
                    Male
                </label>

                <label>
                    <input
                        onChange={handlechange}
                        type="radio"
                        name="gender"
                        value="Female"
                    />
                    Female
                </label>

                <label>
                    <input
                        onChange={handlechange}
                        type="radio"
                        name="gender"
                        value="Other"
                    />
                    Other
                </label>

                <h3>Subject</h3>

                <select onChange={handlechange} name="subject">
                    <option value="">Default</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                </select>

                <h3>Resume</h3>

                <input
                    onChange={handlechange}
                    type="file"
                    name="resume"
                />

                <h3>URL</h3>

                <input
                    onChange={handlechange}
                    type="url"
                    name="url"
                />

                <h3>Description</h3>

                <input
                    onChange={handlechange}
                    type="text"
                    name="description"
                />

                <br /><br />

                <button type="button" onClick={handlereset}>
                    Reset
                </button>

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    )
}