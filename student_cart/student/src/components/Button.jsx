// import React, { useState } from 'react'

// export default function Button(props) {
//     let res=props.marks
//     let gra=props.grade 

    
//     let [btn, setbtn]=useState(props.marks)
//     let [ga, setga]=useState(props.grade)
//     function dec(){
//         setbtn(btn-5)
//     }
//     function inc(){
//         setbtn(btn+5)
//     }

//   return (
//     <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center',gap:'5px'}}>
//         <button onClick={dec}>sub - 5 marks</button>
//         <h1>{btn}</h1>
//         <h1>{ga}</h1>
//         <button onClick={inc}>add +5 marks</button>
//     </div>
//   )
// }


import React, { useState } from "react";
import "./Button.css";

export default function Button(props) {
  const [btn, setbtn] = useState(props.marks);
  const [ga, setga] = useState(props.grade);

  function updateGrade(marks) {
    if (marks >= 90) {
      setga("A");
    } else if (marks >= 75) {
      setga("B");
    } else if (marks >= 60) {
      setga("C");
    } else {
      setga("D");
    }
  }

  function inc() {
    if (btn >= 100) return;

    const newMarks = btn + 5;
    setbtn(newMarks);
    updateGrade(newMarks);
  }

  function dec() {
    if (btn <= 35) return;

    const newMarks = btn - 5;
    setbtn(newMarks);
    updateGrade(newMarks);
  }

  return (
    <div className="student-card">
      <h2>Student Result</h2>

      <div className="result-info">
        <div>
          <h3>Marks</h3>
          <p className="marks">{btn}</p>
        </div>

        <div>
          <h3>Grade</h3>
          <p className={`grade grade-${ga}`}>{ga}</p>
        </div>
      </div>

      <div className="btn-group">
        <button onClick={dec} disabled={btn <= 35}>
          -5 Marks
        </button>

        <button onClick={inc} disabled={btn >= 100}>
          +5 Marks
        </button>
      </div>
    </div>
  );
}