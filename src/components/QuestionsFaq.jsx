// FAQAccordion.jsx
import React, { useState } from 'react';
import './QuestionsFaq.css';

export const QuestionsFaq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      
      <div className="faq">
        
        <div className="faq-question" onClick={toggleAccordion}>
          <div className="question-text">{question}</div>
          <div className={`arrow-icon ${isOpen ? 'open' : ''}`}></div>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    
    );
  };