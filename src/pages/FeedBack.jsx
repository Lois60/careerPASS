import "./FeedBack.css";
import React, { useState } from "react";
import Star from "../components/Star";
import ThankYouSVG from "../components/ThankYouSVG";
import { FaArrowUpLong } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";

const FeedBack = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showSVG, setShowSVG] = useState(false);
  const navigate = useNavigate();

  const handleStarClick = (index) => {
    if (index === rating - 1) {
      setRating(rating - 1);
    } else if (index <= rating) {
      setRating(index + 1);
    }
  };

  const handleSubmit = () => {
    setRating(0);
    setFeedback("");
    setShowSVG(true);
    return true;
  };
  return (
    <div className="feedback__container">
      {!showSVG ? (
        <div className="feedback__form">
          <div className="details">
            <h2>We Appreciate Your Feedback.</h2>
            <p>
              We are looking for ways to improve your experience. Please take a
              moment to evaluate and tell us what you think.
            </p>
          </div>
          <div className="feedback__star">
            {" "}
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                filled={index < rating}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
          <textarea
            className="feedback-textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Leave your feedback here..."
          />
          <div className="feedback__submit-button">
            <button type="button" onClick={handleSubmit}>
              Submit my Feedback
            </button>
          </div>
        </div>
      ) : (
        <div className="feedback__svg">
          <ThankYouSVG />
        </div>
      )}
      <div className="takeAction__container">
        <div className="details">
          <h2>Take action</h2>
          <p>
            Kickstart your journey in your recommended teh career with Tech4Dev!
          </p>
          <p>Start in any of our program</p>
        </div>
        <div className="takeAction__submit-button">
          <button type="button">Start my Career</button>
          <button
            type="button"
            className="circle"
            onClick={() => {
              navigate("/");
            }}
          >
            <FaArrowUpLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
