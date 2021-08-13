import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [amount,setAmount] = useState('');
  const [from,setFrom] = useState(1);
  const [to,setTo] = useState(1);

   
  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label="Amount" onChange={e=>setAmount(e.target.value)}/>

        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label="From" items={units} onChange={e=>setFrom(e.target.value)}/>

          <Select label="To" items={units} onChange={e=>setTo(e.target.value)}/>

          <button onClick={()=>{
            setResult(amount*from/to);
          }}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
