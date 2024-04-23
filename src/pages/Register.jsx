// import { useEffect, useState } from "react";
// import { BASE_URL } from "../utils/Constants";

// export const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [filteredQuestions, setFilteredQuestions] = useState([])

//   const register = async () => {
//     try {
//       console.log({ name, email, password });
//       const response = await fetch(BASE_URL + "/adminRegister", {
//         method: "POST",
//         body: { name, email, password },
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(BASE_URL + "/getAllQuestions", {
//         method: "GET",
//         headers: {
//             'Access-Control-Allow-Origin': "*"
//         }
//       });
//       const data = await response.json();
//       console.log("questionssss", data);
//       setQuestions(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const filterQuestions = (category) => {
//     setFilteredQuestions(questions.filter(question => question.category === category))
//   }
//    console.log(questions.category);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   return (
//     <div>
//       <input type="text" onChange={({ target: { value } }) => setName(value)} />
//       <input
//         type="text"
//         onChange={({ target: { value } }) => setEmail(value)}
//       />
//       <input
//         type="password"
//         onChange={({ target: { value } }) => setPassword(value)}
//       />

//       <button style={{ marginBottom: "40px" }} onClick={register}>
//         <p>Submit</p>
//       </button>

//       <button onClick={() => filterQuestions("Mathematical Aptitude")}>
//         Mathematics
//       </button>
//       <button onClick={() => filterQuestions("Technical Aptitude")}>
//         Technical
//       </button>

//       {filteredQuestions
//         .map((question, index) => (
//           <div key={index}>
//             <h3>Question {question.question_id}</h3>
//             <h4 style={{ marginBottom: "20px" }}>{question.question_text}</h4>
//             <input type="checkbox" /> {question.option1}
//             <input type="checkbox" /> {question.option2}
//             <input type="checkbox" /> {question.option3}
//             <input type="checkbox" /> {question.option4}
//           </div>
//         ))}
//     </div>
//   );
// };



import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/Constants";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [categories, setCategories] = useState([]); // Added state for categories

  const register = async () => {
    try {
      console.log({ name, email, password });
      const response = await fetch(BASE_URL + "/adminRegister", {
        method: "POST",
        body: { name, email, password },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
      console.log("questionssss", data);
      setQuestions(data);
      extractCategories(data); // Call extractCategories after setting questions
    } catch (error) {
      console.log(error);
    }
  };

  const extractCategories = (questions) => {
    const uniqueCategories = [
      ...new Set(questions.map((question) => question.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories); // Log unique categories
  };

  const filterQuestions = (category) => {
    setFilteredQuestions(
      questions.filter((question) => question.category === category)
    );
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <input type="text" onChange={({ target: { value } }) => setName(value)} />
      <input
        type="text"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        onChange={({ target: { value } }) => setPassword(value)}
      />

      <button style={{ marginBottom: "40px" }} onClick={register}>
        <p>Submit</p>
      </button>

      {/* Buttons for each category */}
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterQuestions(category)}>
          {category}
        </button>
      ))}

      {filteredQuestions.map((question, index) => (
        <div key={index}>
          <h3>Question {question.question_id}</h3>
          <h4 style={{ marginBottom: "20px" }}>{question.question_text}</h4>
          <input type="checkbox" /> {question.option1}
          <input type="checkbox" /> {question.option2}
          <input type="checkbox" /> {question.option3}
          <input type="checkbox" /> {question.option4}
        </div>
      ))}
    </div>
  );
};
