import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";

export const TechnicalAptitude = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { responses: answers } = location.state;
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [responses, setResponses] = useState({ technical: [], ...answers });

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
    filterQuestions("Technical Aptitude");
  }, [questions]);

  const handleOptionChange = (index, answer, questionId) => {
    const updatedResponses = [...responses.technical];
    updatedResponses[index] = { questionId, answer };
    setResponses({ ...responses, technical: updatedResponses });
  };

  const navigateToNextSection = () => {
    navigate("/SkillsAssessment", { state: { responses } });
  };

  return (
    <section className="cog-ability">
      <div className="cog-header">
        <p>
          <b> Section 4 : Aptitudes</b>: Evaluate their technical inclination
          <br />
          <br />
          <b>Technical Aptitude</b>
        </p>
      </div>
      <div className="question-container">
        {filteredQuestions.map((question, index) => (
          <div className="question-fetch" key={index}>
            <h3 className="question-number">Question {index}</h3>
            <div className="question-info">
              <h4 className="question-text" style={{ marginBottom: "20px" }}>
                {question.question_text}
              </h4>
              {question.image_path && (
                <img
                  style={{ marginLeft: "-50px", width: "50%" }}
                  src={question.image_path}
                  alt={`Question ${question.question_id}`}
                />
              )}
              <br />
              <div className="options">
                {Array.from({ length: 4 }).map(
                  (_, optionIndex) =>
                    question[`option${optionIndex + 1}`] && (
                      <div className="option" key={optionIndex}>
                        <input
                          id={`${question.question_id}${
                            question[`option${optionIndex + 1}`]
                          }`}
                          type="radio"
                          name={`question${index}`}
                          value={question[`option${optionIndex + 1}`] || ""}
                          checked={
                            responses.technical[index]?.answer ===
                            question[`option${optionIndex + 1}`]
                          }
                          onChange={() =>
                            handleOptionChange(
                              index,
                              question[`option${optionIndex + 1}`] || "",
                              question.question_id
                            )
                          }
                        />
                        <label
                          htmlFor={`${question.question_id}${
                            question[`option${optionIndex + 1}`]
                          }`}
                        >
                          {question[`option${optionIndex + 1}`] || ""}
                        </label>
                        <br />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <button
          className="previous"
          onClick={() => navigate("/Magination", { state: { responses } })}
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
