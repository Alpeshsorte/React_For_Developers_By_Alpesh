// import React from "react";
// import './Cart.css'
// export default function Cart(props) {
//   return (
//     <div className="cart">
//       <h2>{props.name}</h2>
//       <h3>Marks: {props.marks}</h3>
//       <h3>Grade: {props.grade}</h3>
//     </div>
//   );
// }


import React from "react";

export default function Cart({ name, marks, grade }) {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="student"
        />
        <h2>{name}</h2>
      </div>

      <div className="card-body">
        <div className="box">
          <h4>Marks</h4>
          <p>{marks}</p>
        </div>

        <div className="box">
          <h4>Grade</h4>
          <p>{grade}</p>
        </div>

        <div className="box">
          <h4>Status</h4>
          <p>
            {grade === "A" || grade === "B"
              ? "Good"
              : grade === "C"
              ? "Average"
              : "Poor"}
          </p>
        </div>
      </div>
    </div>
  );
}