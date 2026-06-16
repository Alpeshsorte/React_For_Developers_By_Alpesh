// import React, { useState } from 'react'
// import './Rating.css'
// export default function Rating() {
//     let [rate, setrating]=useState(0)

//     function inc(){
//         if(rate<5){
//             setrating(rate+1)
//         }
//     }
//     function dec(){
//         if(rate>1){
//             setrating(rate-1)
//         }
//     }
//   return (
//     <div className="rating-container">
//         <button className="btn minus" onClick={dec}>-</button>
//         <h1>Rating:- { rate}</h1>
//         <button className="btn plus" onClick={inc}>+</button>
//     </div>
//   )
// }

import React, { useState } from "react";
import "./Rating.css";

export default function Rating() {
  const [rate, setRating] = useState(0);

  const inc = () => {
    if (rate < 5) {
      setRating(rate + 1);
    }
  };

  const dec = () => {
    if (rate > 0) {
      setRating(rate - 1);
    }
  };

  return (
    <div className="rating-box">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rate ? "star active" : "star"}
          >
            ★
          </span>
        ))}
      </div>

      <h2>Rating: {rate}</h2>

      <div className="buttons">
        <button className="btn minus" onClick={dec}>
          -
        </button>

        <button className="btn plus" onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}