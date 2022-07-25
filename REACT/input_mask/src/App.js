import React from "react";
import Input from "./Input.js";
import cities from "./cities.json";

function App() {
  const [hint, setHint] = React.useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    
    const city = cities.find((item) => value && item.startsWith(value));
    console.log(city);
    if (city) setHint(city);
    else setHint("");
  };
  return (
    <div>
      <Input hint={hint} handleChange={handleChange} />
    </div>
  );
}

export default App;
