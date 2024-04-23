


import { HiArrowSmRight } from "react-icons/hi";
import React from "react";
import "./HeroSection.css";

export const HeroSection = () => {
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
        <br />
        <button
          onClick={() => (window.location.href = "/RegisterForm")}
          className="hero-btn"
        >
          Take Assessment
        </button>
        <HiArrowSmRight className="arrow" />
      </div>
    </div>
  );
};
