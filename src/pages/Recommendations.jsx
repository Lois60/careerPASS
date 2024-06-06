import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";
import "./Recommendations.css";
import RecommendationSVG from "../components/RecommendationSVG";
import ProgressBar from "../components/ProgressBar";
import { FaArrowRightLong } from "react-icons/fa6";

export const Recommendations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { assessment_result } = location?.state;
  const [personalityResult, setPersonalityResult] = useState(null);

  const fetchPersonalityRecommendations = async () => {
    try {
      console.log("personalityresult****", assessment_result);
      setPersonalityResult(assessment_result);
    } catch (error) {
      console.error("Error submitting personality assessment:", error);
    }
  };

  const convertScores = (current, total) => {
    const newCurrent = current ? (Number(current) / Number(total)) * 10 : 0;
    const newTotal = 10;
    return parseInt(newCurrent.toString(), 10);
  };

  useEffect(() => {
    fetchPersonalityRecommendations();
  }, []);

  return (
    <div className="recommendation__container">
      <div className="recommendation__svg-container">
        <RecommendationSVG />
      </div>
      <div className="recommendation__header">
        <h3>Welcome to your Psychometric Assessment Results </h3>
      </div>
      <p>
        Thank you for participating in our psychometric assessment. This report
        is tailored to provide you with valuable insights into your cognitive
        abilities, personality traits, technical skills, and interests based on
        your responses.
      </p>
      <p>
        {" "}
        Below you’ll find a detailed breakdown of your assessment results,
        organized into sections. Each section offers a comprehensive analysis of
        your performance.
      </p>
      <h4>
        The assessment contains 5 Modules which are organized into different
        areas
      </h4>

      {personalityResult ? (
        <>
          <div className="recommendations__progress-bars">
            <div className="recommendations__progress-bar">
              <h3>COGNITIVE ABILITIES</h3>

              <ProgressBar
                total={10}
                current={convertScores(
                  personalityResult.cognitiveAbility_score,
                  personalityResult.cognitiveAbility_score_max
                )}
                color={"#3E2342"}
              />
              <p className="recommendations__result-text">
                You scored{" "}
                {`${convertScores(
                  personalityResult.cognitiveAbility_score,
                  personalityResult.cognitiveAbility_score_max
                )}/10`}{" "}
                in session 1
              </p>
            </div>
            <div className="recommendations__progress-bar">
              <h3>PERSONALITY TRAITS</h3>
              <ProgressBar
                total={10}
                current={convertScores(
                  personalityResult.personallityTrait_score,
                  personalityResult.personallityTrait_score_max
                )}
                color={"#74147C"}
              />
              <p className="recommendations__result-text">
                You scored{" "}
                {`${convertScores(
                  personalityResult.personallityTrait_score,
                  personalityResult.personallityTrait_score_max
                )}/10`}{" "}
                in session 2
              </p>
            </div>
            <div className="recommendations__progress-bar">
              <h3>CREATIVITY AND INNOVATION</h3>
              <ProgressBar
                total={10}
                current={convertScores(
                  personalityResult.imaginative_score,
                  personalityResult.imaginative_score_max
                )}
                color={"#9747FF"}
              />
              <p className="recommendations__result-text">
                You scored{" "}
                {`${convertScores(
                  personalityResult.imaginative_score,
                  personalityResult.imaginative_score_max
                )}/10`}{" "}
                in session 3
              </p>
            </div>
            <div className="recommendations__progress-bar">
              <h3>APTITUDES</h3>
              <ProgressBar
                total={10}
                current={convertScores(
                  personalityResult.aptitude_score,
                  personalityResult.aptitude_score_max
                )}
                color={"#FF1D1D"}
              />
              <p className="recommendations__result-text">
                You scored{" "}
                {`${convertScores(
                  personalityResult.aptitude_score,
                  personalityResult.aptitude_score_max
                )}/10`}{" "}
                in session 4
              </p>
            </div>
            <div className="recommendations__progress-bar">
              <h3>SKILLS AND INTEREST</h3>
              <ProgressBar
                total={10}
                current={convertScores(6, 10)}
                color={"#FEAA6D"}
              />
              <p className="recommendations__result-text">
                You scored {`${convertScores(6, 10)}/10`} in session 5
              </p>
            </div>
          </div>
          <p>
            Your performance in each skill is calculated against an average
            benchmark performance calculated across all of the people who have
            taken our assessments.
          </p>

          <p>
            This guides you to what you do best. Note that this does not mean
            that you cannot perform the skills you score lowest on or that you
            do not have other strengths, just that you have your certain skill
            that you are good at and can put forward
          </p>
          <div className="recommendation__header best_fit">
            <p>You are best fit for</p>
            <div>
              <h2>{personalityResult?.recommended_track_details?.best_fit}</h2>
            </div>
          </div>
          <p>
            {personalityResult?.recommended_track_details?.best_fit_description}
          </p>
          <p>
            Your score shows your ability in Creativity and Imagination,
            Problem-Solving Skills, Attention to Detail, Spatial Reasoning,
            Analytical Thinking, Critical Thinking, User-Centered Approach,
            Visual Perception, and Creativity Testing.
          </p>
          <div className="recommendation__header alternative_fit">
            <p>Alternative fit:</p>
            <div>
              <h2>
                {personalityResult?.recommended_track_details?.alternative_fit}
              </h2>
            </div>
          </div>
          <p>
            {
              personalityResult?.recommended_track_details
                ?.alternative_fit_description
            }
          </p>
          <div className="recommendation__buttons">
            <div className="recommendation__result-buttons">
              <button type="button">Send to Mail</button>
              <button type="button">Download Result</button>
            </div>
            <button
              type="button"
              className="arrow"
              onClick={() => navigate("/FeedBack")}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}

      {/* {personalityResult && (
        <div>
          <h2>Personality Result</h2>

          <pre>{JSON.stringify(personalityResult, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};
