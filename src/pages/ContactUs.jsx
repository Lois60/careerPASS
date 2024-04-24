import React, { useState } from "react";
import "./ContactUs.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    how_can_we_help: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.full_name.trim()) {
      errors.full_name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone_number.trim()) {
      errors.phone_number = "Phone Number is required";
    }
    if (!formData.how_can_we_help.trim()) {
      errors.how_can_we_help = "Please enter your message";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmissionStatus("success");
      setTimeout(() => {
        navigate("/ThankYou");
      }, 4000);
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        how_can_we_help: "",
      });
    }
  };

  return (
    <section className="contact-us">
      <div className="contact-header">
        <div className="contact-item">
          <h1>
            {" "}
            <IoIosArrowBack />
            Contact Us
          </h1>
          <p>Do you have an inquiry? Kindly drop us a message below.</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="label-text" htmlFor="full_name">
          Full Name
        </label>
        <br />
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter your name"
          value={formData.full_name}
          onChange={handleInputChange}
        />
        {formErrors.full_name && (
          <span className="error-message">{formErrors.full_name}</span>
        )}
        <br />
        <br />
        <label className="label-text" htmlFor="email">
          Email Address
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <span className="error-message">{formErrors.email}</span>
        )}
        <br />
        <br />
        <label className="label-text" htmlFor="phone_number">
          Phone Number
        </label>
        <br />
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Enter your phone number"
          value={formData.phone_number}
          onChange={handleInputChange}
        />
        {formErrors.phone_number && (
          <span className="error-message">{formErrors.phone_number}</span>
        )}
        <br />
        <br />
        <label className="label-text" htmlFor="how_can_we_help">
          How can we help?
        </label>
        <br />
        <textarea
          className="textarea"
          id="how_can_we_help"
          name="how_can_we_help"
          placeholder="Enter your message"
          value={formData.how_can_we_help}
          onChange={handleInputChange}
        />
        {formErrors.how_can_we_help && (
          <span className="error-message">{formErrors.how_can_we_help}</span>
        )}
        <br />
        {submissionStatus === "success" && (
          <p className="success-message">Form submitted successfully!</p>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};
