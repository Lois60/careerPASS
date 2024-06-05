import { HiArrowSmRight } from "react-icons/hi";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/RegisterForm");
  };
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Find Your Unique <br />
          Strength With {""}
          <span style={{ color: "#FEAA6D" }}>CareerPASS.</span>
        </h1>
        <p>
          Get a detailed assessment of your unique strength, and <br />{" "}
          potential area for development in your Tech Career.
        </p>
        <button onClick={handleNavigate} className="hero-btn">
          Take Assessment Test
          <HiArrowSmRight className="arrow" />
        </button>
      </div>
    </div>
  );
};
