import React, { useState } from "react";
import "./Clacu.css";

export default function Clacu() {
  let [prev, setprev] = useState(0);
  let [curr, setcurr] = useState(0);
  let [op, operation] = useState("");
  let [history, setHistory] = useState([]);

  function handalnum(event) {
    let text=event.target.innerText
  
    if(text==="Back"){
      setcurr(Math.floor(curr/10))
      return;
    }

    let val=+text
    let currval=curr * 10 + val;
    setcurr(currval)
  }
  
  function handalop(event){
    let newop=event.target.innerText

    if(prev !==0 && op !== ""){

      let result=0;

      if(op === "+"){
        result = prev + curr
      }else if (op === "-"){
        result = prev - curr
      }else if (op === "*"){
        result = prev * curr
      }else if (op === "/"){
        result = prev / curr
      }
      setprev(result);
      setcurr(0);
    }
    else{
      setprev(curr)
      setcurr(0)
    }
    operation(newop)
  }

  function handalsum(){
    let result=0

    if(op === "+"){
        result = prev + curr
    
    }else if (op === "-"){
        result = prev - curr
       
    }else if (op === "*"){
        result = prev * curr
        
    }else if (op === "/"){
        result = prev / curr
      
    }

    // setHistory(prevHistory => [
    //   ...prevHistory,
    //   `${prev} ${op} ${curr} = ${result}`
    // ]);
    setHistory(function(prevHistory) {
      return [...prevHistory, prev + " " + op + " " + curr + " = " + result];
  });

    setcurr(result);
    setprev(0)
    operation("")
  }

  function handalclear(){
    setcurr(0)
    setprev(0)
    operation("")
  }

  function historyclear(){
    setHistory([])
  }

  return (
    <div id="cal">
      <div id="history">
          <h2>History</h2>

          {history.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </div>

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
        <button onClick={handalnum}>Back</button>
        <button onClick={historyclear}>Clear History</button>
      </div>
    </div>
  );
}