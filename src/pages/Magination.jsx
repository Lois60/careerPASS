import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constants";
import { useEffect, useState } from "react";

export const Magination = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { responses: answers } = location.state;
	const [questions, setQuestions] = useState([]);
	const [filteredQuestions, setFilteredQuestions] = useState([]);
	const [responses, setResponses] = useState({ ...answers, imagination: [] });

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
		filterQuestions("Imagination");
	}, [questions]);

	const handleOptionChange = (index, answer, questionId) => {
		const updatedResponses = [...responses.imagination];
		updatedResponses[index] = { questionId, answer };
		setResponses({ ...responses, imagination: updatedResponses });
	};

	const navigateToNextSection = () => {
		navigate("/TechnicalAptitude", { state: { responses } });
	};

	return (
		<section className='cog-ability'>
			<div className='cog-header'>
				<p>
					<b> Section 3: Creativity and Innovation:</b>This section tests
					creative problem-solving. It presents real-world problems and asks
					applicants to propose innovative solutions.
					<br />
					<br />
					<b>Imagination</b>
				</p>
			</div>
			<div className='question-container'>
				{filteredQuestions.map((question, index) => (
					<div className='question-fetch input-text' key={index}>
						<h3 className='question-number'>Question {question.questionNo}</h3>
						<div className='question-info'>
							<h4 className='question-text' style={{ marginBottom: "20px" }}>
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
							<div className='options'>
								{Array.from({ length: 3 }).map((_, optionIndex) => (
									<div className='option' key={optionIndex}>
										<input
											type='radio'
											name={`question${index}`}
											value={question[`option${optionIndex + 1}`] || ""}
											checked={
												responses.imagination[index]?.answer ===
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
										<label>{question[`option${optionIndex + 1}`] || ""}</label>
										<br />
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='btn-container'>
				<button
					className='previous'
					onClick={() =>
						navigate("/EmotionalStability", { state: { responses } })
					}
				>
					Previous
				</button>
				<button className='next' onClick={navigateToNextSection}>
					Next
				</button>
			</div>
		</section>
	);
};
