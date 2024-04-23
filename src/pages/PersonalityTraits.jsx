import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";

export const PersonalityTraits = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [responses, setResponses] = useState({});

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

  const handleResponseChange = (questionIndex, value) => {
    const updatedResponses = {
      ...responses,
      [questionIndex]: value,
    };
    setResponses(updatedResponses);
    localStorage.setItem(
      "personalityTraitsResponses",
      JSON.stringify(updatedResponses)
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
      setResponses(JSON.parse(savedResponses));
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
      <div>
        {filteredQuestions.map((question, index) => (
          <div className="input-text" key={index}>
            <h3>Question {question.questionNo}</h3>
            <h4 style={{ marginBottom: "20px" }}>{question.question_text}</h4>
            <input
              type="radio"
              name={`question${index}`}
              value={question.option1}
              checked={responses[index] === question.option1}
              onChange={() => handleResponseChange(index, question.option1)}
            />{" "}
            {question.option1}
            <br />
            <input
              type="radio"
              name={`question${index}`}
              value={question.option2}
              checked={responses[index] === question.option2}
              onChange={() => handleResponseChange(index, question.option2)}
            />{" "}
            {question.option2}
            <br />
            <input
              type="radio"
              name={`question${index}`}
              value={question.option3}
              checked={responses[index] === question.option3}
              onChange={() => handleResponseChange(index, question.option3)}
            />{" "}
            {question.option3}
            <br />
            <input
              type="radio"
              name={`question${index}`}
              value={question.option4}
              checked={responses[index] === question.option4}
              onChange={() => handleResponseChange(index, question.option4)}
            />{" "}
            {question.option4}
          </div>
        ))}
      </div>
      <div className="btn-container">
        <button
          className="previous"
          onClick={() => (window.location.href = "/LogicalReasoning")}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => (window.location.href = "/EmotionalStability")}
        >
          Next
        </button>
      </div>
    </section>
  );
};
