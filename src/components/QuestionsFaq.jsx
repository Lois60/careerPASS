// FAQAccordion.jsx
import React, { useState } from "react";
import "./QuestionsFaq.css";
import { IoIosArrowDown } from "react-icons/io";

export const QuestionsFaq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <div className="faq-question" onClick={toggleAccordion}>
        <div className="question-text">
          <p>{question}</p>
          <div>
            <IoIosArrowDown className={`arrow-icon ${isOpen ? "open" : ""}`} />
          </div>
        </div>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};
