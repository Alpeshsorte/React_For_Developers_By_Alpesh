import React, { useState } from "react";

import "./Clacu.css";

export default function Clacu() {
  let [prev, setprev] = useState(0);
  let [curr, setcurr] = useState(0);
  let [op, operation] = useState("");

  function handalnum(event) {
    let val=+event.target.innerText
    let currval=+curr*10+val
    setcurr(currval)

  }

  function handalop(event){
    let op=event.target.innerText
    operation(op)
    setprev(curr);
    setcurr(0);
  }

  function handalsum(){
    let result;

    if(op === "+"){
        result = curr + prev
    }else if (op === "-"){
        result = curr - prev
    }else if (op === "*"){
        result = curr * prev
    }else if (op === "/"){
        result = curr / prev
    }

    setcurr(result);
    setprev(0)
    operation("")
  }

  function handalclear(){
    setcurr(0)
    setprev(0)
    operation("")
  }

  return (
    <div id="cal">
      <div id="topcal">
        <h1> {prev}</h1>
        <h1> {curr}</h1>
        <h1> {op}</h1>
      </div>
      <div id="botcal">
        <button onClick={handalnum}>1</button>
        <button onClick={handalnum}>2</button>
        <button onClick={handalnum}>3</button>
        <button onClick={handalnum}>4</button>
        <button onClick={handalnum}>5</button>
        <button onClick={handalnum}>6</button>
        <button onClick={handalnum}>7</button>
        <button onClick={handalnum}>8</button>
        <button onClick={handalnum}>9</button>
        <button onClick={handalnum}>0</button>
        <button onClick={handalop}>+</button>
        <button onClick={handalop}>-</button>
        <button onClick={handalop}>*</button>
        <button onClick={handalop}>/</button>
        <button onClick={handalsum}>=</button>
        <button onClick={handalclear}>AC</button>
      </div>
    </div>
  );
}
