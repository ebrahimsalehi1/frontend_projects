import React from 'react';



const Input = ({ className, placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
