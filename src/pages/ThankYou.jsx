
import { BsHandThumbsUp } from "react-icons/bs";
import React from "react";
import "./ThankYou.css"; 

export const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="image-container">
        <img src="/ThankYou.png" alt="Thank you" />
      </div>
      <div className="text-container">
        <h3>Thank you for Contacting Us</h3>
        <p>We will get back to you shortly</p>
        <div>
          <BsHandThumbsUp style={{ color: " #74147c" }} size={30} />
        </div>

        <button
          className="continue-thank"
          onClick={() => (window.location.href = "/")}
        >
          Back To HomePage
        </button>
      </div>
    </div>
  );
};
