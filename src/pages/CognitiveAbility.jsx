import { useNavigate } from "react-router-dom";
import "./CognitiveAbility.css";
import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";

export const CognitiveAbility = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [responses, setResponses] = useState({ cognitive: [] });

  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      const response = await fetch(BASE_URL + "/getAllQuestions", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      console.log(data);
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
    filterQuestions("Mathematical Aptitude");
  }, [questions]);

  const handleOptionChange = (index, answer, questionId) => {
    const updatedResponses = [...responses.cognitive];
    updatedResponses[index] = { questionId, answer };
    setResponses({ cognitive: updatedResponses });
  };

  const navigateToNextSection = () => {
    navigate("/LogicalReasoning", { state: { responses } });
  };

  return (
    <section className="cog-ability">
      <div className="cog-header">
        <p>
          <b> Section 1</b>: Cognitive Ability <br />
          <br />
          <b> Mathematical Aptitude</b>: This section evaluates applicants'
          mathematical problem-solving skills. The questions presented here
          range from basic arithmetic to more complex mathematical reasoning,
          allowing us to assess your quantitative abilities effectively.{" "}
        </p>
      </div>
      <div className="question-container">
        {filteredQuestions.map((question, index) => (
          <div className="question-fetch" key={index}>
            <h3 className="question-number">Question {question.questionNo}</h3>
            <div className="question-info">
              <h4 className="question-text">{question.question_text}</h4>
              <div className="options">
                {Array.from({ length: 4 }).map((_, optionIndex) => (
                  <div className="option" key={optionIndex}>
                    <input
                      type="radio"
                      value={question[`option${optionIndex + 1}`]}
                      checked={
                        responses.cognitive[index]?.answer ===
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="next-continue" onClick={navigateToNextSection}>
        Next
      </button>
    </section>
  );
};
