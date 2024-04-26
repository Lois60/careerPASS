import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";

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
      console.log("logicresult*****", result);
      setLogicResult(result);
    } catch (error) {
      console.error("Error submitting logic assessment:", error);
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
      console.log("personalityresult****", result);
      setPersonalityResult(result);
    } catch (error) {
      console.error("Error submitting personality assessment:", error);
    }
  };

  useEffect(() => {
    fetchPersonalityRecommendations();
    fetchLogicRecommendations();
  }, []);

  return (
    <div>
      {logicResult && (
        <div>
          <h2>Logic Result</h2>
        
          <pre>{JSON.stringify(logicResult, null, 2)}</pre>
        </div>
      )}
      {personalityResult && (
        <div>
          <h2>Personality Result</h2>
       
          <pre>{JSON.stringify(personalityResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
