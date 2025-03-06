import { useState } from "react";

const useInput = (initialValue) => {
  // control state here
  // return value and onChange to handle state

  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    // handle state change

    console.log("onchange", e.target.value);
    setValue(e.target.value);
  };

  const obj = {
    value: value,
    onChange: onChange,
  };

  console.log("useInput", obj);

  return obj;
};

export default useInput;
