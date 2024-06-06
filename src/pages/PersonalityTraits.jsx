import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PersonalityTraits = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { responses: answers } = location.state;
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [responses, setResponses] = useState({ ...answers, personality: [] });

  const navigateToNextSection = () => {
    navigate("/EmotionalStability", { state: { responses } });
  };
  const navigateTopreviousSection = () => {
    navigate("/LogicalReasoning", { state: { responses } });
  };

  const handleOptionChange = (index, answer, questionId) => {
    const updatedResponses = [...responses.personality];
    updatedResponses[index] = { questionId, answer };
    console.log({ ...responses, personality: updatedResponses });
    setResponses({ ...responses, personality: updatedResponses });
  };
  const fetchQuestions = async () => {
    try {
      const response = await fetch(BASE_URL + "/getAllQuestions", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };
  const filterQuestions = (categories) => {
    setFilteredQuestions(
      questions.filter((question) => categories.includes(question.category))
    );
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  useEffect(() => {
    filterQuestions(["Openness to Experience", "Conscientiousness"]);
  }, [questions]);

  useEffect(() => {
    const savedResponses = localStorage.getItem("personalityTraitsResponses");
    if (savedResponses) {
      setResponses({ ...JSON.parse(savedResponses), personality: [] });
    }
  }, []);
  return (
    <section className="cog-ability">
      <div className="cog-header">
        <p>
          <b> Section 2: Personality Traits:</b> Introversion vs. Extroversion.
          This uses questions that gauge how applicants feel in social settings
          and whether they draw energy from solitude or social interactions.
          <br />
          <br />
          <b>Openness to Experience, Conscientiousness</b>
        </p>
      </div>

      <div className="question-container">
        {filteredQuestions.map((question, index) => (
          <div className="question-fetch" key={index}>
            <h3 className="question-number">Question {index + 1}</h3>
            <div className="question-info">
              <h4 className="question-text" style={{ marginBottom: "20px" }}>
                {question.question_text}
              </h4>
              {question.image_path && (
                <img
                  style={{ width: "50%" }}
                  src={question.image_path}
                  alt={`Question ${question.question_id}`}
                />
              )}
              <br />
              {Array.from({ length: 4 }).map((_, optionIndex) => (
                <>
                  {/* <p>{JSON.stringify(question[`option${optionIndex + 1}`])}</p> */}
                  <div className="option" key={optionIndex}>
                    <input
                      type="radio"
                      id={`${question.question_id}${
                        question[`option${optionIndex + 1}`]
                      }`}
                      value={question[`option${optionIndex + 1}`]}
                      checked={
                        responses?.personality[index]?.answer ===
                        question[`option${optionIndex + 1}`]
                      }
                      onChange={() =>
                        handleOptionChange(
                          index,
                          question[`option${optionIndex + 1}`],
                          question.question_id
                        )
                      }
                    />
                    <label
                      htmlFor={`${question.question_id}${
                        question[`option${optionIndex + 1}`]
                      }`}
                    >
                      {question[`option${optionIndex + 1}`]}
                    </label>
                    <br />
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="btn-container">
        <button className="previous" onClick={navigateTopreviousSection}>
          Previous
        </button>
        <button className="next" onClick={navigateToNextSection}>
          Next
        </button>
      </div>
    </section>
  );
};
