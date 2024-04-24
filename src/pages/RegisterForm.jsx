
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [agree, setAgree] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    const response = await fetch(
      "https://psychometric-assessment-6di1.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          location,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setSuccessMessage("Registration successful!");
      setName("");
      setEmail("");
      setLocation("");
      setTimeout(() => {
        navigate("/TakeAssessment");
      }, 4000);
    } else {
      setSuccessMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-form-container">
      <div className="image-container">
        <img src="/Rectangle 4.png" alt="Image" />
        <div className="overlay"></div>
        <div className="overlay-text">
          <p></p>
        </div>
      </div>
      <div className="form-container">
        <h1>Registration</h1>
        <p>Please fill in this information to continue</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />

          <label>
            Email
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />

          <label>
            Location
            <br />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <br />

          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="agree-text">I agree to the </span>
            <a href="/Terms" target="_blank">
              terms and conditions
            </a>
          </label>
          <br />

          <button type="submit">Register</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};
