import "./TakeAssessment.css";
import { IoIosArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";
export const TakeAssessment = () => {

  
  return (
    <section className="assessment-text">
      <div className="assessment-header">
        <h4>
          {" "}
          <IoIosArrowBack />
          Welcome to CareerPASS Psychometric Assessment!{" "}
        </h4>
        <p>
          This assessment is designed to help us understand your unique
          strengths, preferences, and learning styles. This will allow <br /> us
          to tailor a personalized learning experience within the Women
          Techsters Fellowship.
        </p>
      </div>
      <div className="assessment-items">
        <div className="ass-title">
          <h4>Reassurance</h4>
          <p>
            There are no right or wrong answers. Simply try your best to answer
            honestly and thoughtfully.
          </p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Estimated Time</h4>
          <p>
            The assessment will take approximately 60 minutes to complete. We
            advice you take your time as it is a psychometric test.
          </p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Sitting</h4>
          <p>You can only complete the assessment in one sitting.</p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Honesty</h4>
          <p>
            It's important to answer as honestly as possible. Trying to 'game
            the system' will not provide accurate or helpful results.
          </p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Question Type</h4>
          <p>
            You will encounter different types of questions, including:
            <li>
              Multiple-choice questions about your preferences and behaviors.
            </li>
            <li>
              Situational judgment questions to gauge your decision-making.
            </li>
            Situational judgment questions to gauge your decision-making.
          </p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Results</h4>
          <p>
            Your results will be analyzed confidentially. We'll use them to
            create a personalized learning plan to support your success if you
            choose to apply for the Women Techsters Fellowship.
          </p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Browser Compatibility</h4>
          <p>For the best experience, please use; chrome browser.</p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Reset</h4>
          <p>
            Your answers will be saved automatically, but you can not restart
            the test once you commence. Make sure to take it in one sitting.
          </p>
        </div>
        <br />
        <div className="ass-title">
          <h4>Questions</h4>
          <p>
            If you have any questions about the assessment, please contact us{" "}
            {""}
            <Link to="/Contact-Us">here</Link>
          </p>
         
        </div>
        <br />
        <div className="ass-title">
          <h4></h4>
          <p>
            Your dedication to completing this assessment demonstrates your
            commitment to personal growth. Thank you for taking the time to help
            us tailor the best possible learning experience for you.
            <br /> Now, you can go ahead to start your test!
          </p>
        </div>
      </div>

      <div>
        <button
          className="ass-continue"
          onClick={() => (window.location.href = "/CognitiveAbility")}
        >
          Start Test
        </button>
      </div>
    </section>
  );
};
