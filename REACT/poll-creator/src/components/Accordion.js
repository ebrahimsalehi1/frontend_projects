import React, { useState } from "react";
import "../assets/styles/accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="accordion-container">
      <div className="accordion-title" onClick={() => toggleAccordion(!isOpen)}>
        <label className="accordion-title-lable">{title}</label>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default Accordion;
