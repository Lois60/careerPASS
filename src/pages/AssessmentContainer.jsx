// Parent component that wraps all assessment pages
import React, { useState } from "react";
import { SkillsAssessment } from "./SkillsAssessment";
import { CognitiveAbility } from "./CognitiveAbility";
// Import other assessment components

export const AssessmentContainer = () => {
  // State to store assessment responses from other pages
  const [otherResponses, setOtherResponses] = useState({});

  // Function to update assessment responses from other pages
  const updateOtherResponses = (responses) => {
    setOtherResponses(responses);
  };

  // Function to handle submission from the skills assessment page
  const handleSubmit = async (skillsResponses) => {
    try {
      const allResponses = { ...otherResponses, ...skillsResponses };

      // Submit all responses
      const response = await fetch(
        "https://psychometric-assessment-1.onrender.com/scores-recommendations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allResponses),
        }
      );

      // Handle successful submission
      console.log("Assessment submitted successfully!");
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  };

  return (
    <>
      {/* Render other assessment components and pass updateOtherResponses function */}
      <CognitiveAbility updateResponses={updateOtherResponses} />
      {/* Other assessment components */}
      <SkillsAssessment handleSubmit={handleSubmit} />
    </>
  );
};
