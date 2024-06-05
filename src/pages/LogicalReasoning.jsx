import { useLocation, useNavigate } from "react-router-dom";
import "./LogicalReasoning.css";
import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";

export const LogicalReasoning = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { responses: answers } = location.state;
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [responses, setResponses] = useState({ logical: [], ...answers });

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

  const filterQuestions = (category) => {
    setFilteredQuestions(
      questions.filter((question) => question.category === category)
    );
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    filterQuestions("Logical Reasoning");
  }, [questions]);

  const handleOptionChange = (index, answer, questionId) => {
    const updatedResponses = [...responses.logical];

    updatedResponses[index] = { questionId, answer };
    console.log({ ...responses, logical: updatedResponses });
    setResponses({ ...responses, logical: updatedResponses });
  };

  const navigateToNextSection = () => {
    navigate("/EmotionalStability", { state: { responses } });
  };

  return (
    <section className="cog-ability">
      <div className="cog-header">
        <p>
          <b> Section 2</b>: Logical Reasoning <br />
          <br />
          <b>Logical Reasoning:</b> This process evaluates logical thinking by
          presenting scenarios with missing information and asking applicants to
          deduce the most likely outcomes or explanations
        </p>
      </div>
      <div className="question-container">
        {filteredQuestions.map((question, index) => (
          <div className="question-fetch" key={index}>
            <h3 className="question-number">Question {question.questionNo}</h3>
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
                <div className="option" key={optionIndex}>
                  <input
                    type="radio"
                    value={question[`option${optionIndex + 1}`]}
                    checked={
                      responses.logical[index]?.answer ===
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
                  <label>{question[`option${optionIndex + 1}`]}</label>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <button
          className="previous"
          onClick={() =>
            navigate("/CognitiveAbility", { state: { responses } })
          }
        >
          Previous
        </button>
        <button className="next" onClick={navigateToNextSection}>
          Next
        </button>
      </div>
    </section>
  );
};
