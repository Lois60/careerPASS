import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";

export const SkillsAssessment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { responses: answers } = location.state;
  console.log(answers);
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [responses, setResponses] = useState({ skills: [], ...answers });

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

  const handleSubmit = async () => {
    try {
      const response = await fetch(BASE_URL + "/scores-recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: localStorage.getItem("username"),
          responses: [
            ...responses.cognitive,
            ...responses.logical,
            ...responses.emotional,
            ...responses.imagination,
            ...responses.skills,
            ...responses.technical,
          ],
        }),
      });
      const assessment_result = await response.json();
      console.log(assessment_result);

      navigate("/Recommendations", { state: { assessment_result } });
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    filterQuestions("Skills Assessment");
  }, [questions]);

  const handleOptionChange = (index, answer, questionId) => {
    const updatedResponses = [...responses.skills];
    updatedResponses[index] = { questionId, answer };
    setResponses({ ...responses, skills: updatedResponses });
  };

  return (
    <section className="cog-ability">
      <div className="cog-header">
        <p>
          <b> Section 5: Skills and Interests:</b> This section test proficiency
          or interest in various technical and creative skills, such as
          programming languages, design software, or artistic skills.
          <br />
          <br />
          <b>Skills Assessment</b>
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
                          type="radio"
                          name={`question${index}`}
                          value={question[`option${optionIndex + 1}`] || ""}
                          checked={
                            responses.skills[index]?.answer ===
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
                        <label>
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
          style={{ marginLeft: "60px" }}
          className="next"
          onClick={() =>
            navigate("/TechnicalAptitude", { state: { responses } })
          }
        >
          Previous
        </button>

        <button
          style={{ marginRight: "60px" }}
          className="previous"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};
