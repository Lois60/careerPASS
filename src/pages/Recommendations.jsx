import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";
import "./Recommendations.css"

export const Recommendations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { responses } = location.state;

  const [logicResult, setLogicResult] = useState(null);
  const [personalityResult, setPersonalityResult] = useState(null);

  const fetchLogicRecommendations = async () => {
    try {
      const response = await fetch(
        BASE_URL + "/math-logic-scores-recommendation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: localStorage.getItem("username"),
            responses: [...responses.cognitive, ...responses.logical],
          }),
        }
      );
      const result = await response.json();
      setLogicResult(result);
    } catch (error) {
      console.error("Error fetching logic recommendations:", error);
    }
  };

  const fetchPersonalityRecommendations = async () => {
    try {
      const response = await fetch(BASE_URL + "/scores-recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: localStorage.getItem("username"),
          responses: [
            ...responses.technical,
            ...responses.skills,
            ...responses.imagination,
          ],
        }),
      });
      const result = await response.json();
      setPersonalityResult(result);
    } catch (error) {
      console.error("Error fetching personality recommendations:", error);
    }
  };

  useEffect(() => {
    fetchPersonalityRecommendations();
    fetchLogicRecommendations();
  }, []);

  return (
	<section className="reco-scores">
        <div className="reco-header">
          <h1>Welcome to your Psychometric Assessment Results</h1>
          <p>
            Thank you for participating in our psychometric assessment. This
            report is tailored to provide you with valuable insights into your
            cognitive abilities, personality traits, technical skills, and
            interests based on your responses. <br /> <br /> Below you’ll find a
            detailed breakdown of your assessment results, organized into
            sections. Each section offers a comprehensive analysis of your
            performance.
          </p>

   
      <div>
        Logic Result:
        <pre>{JSON.stringify(logicResult, null, 2)}</pre>
      </div>
      <div>
        Personality Result:
        <pre>{JSON.stringify(personalityResult, null, 2)}</pre>
      </div>
    </div>
	</section>
  );
};
