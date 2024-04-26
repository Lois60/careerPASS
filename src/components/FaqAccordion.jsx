import './FaqAccordion.css'
import {QuestionsFaq} from "../components/QuestionsFaq.jsx";
import { BellCon } from "./BellCon.jsx";

 export const FaqAccordion = () =>{
    return (
      <section className="faq-section">
        <h2 className="faq-text">Frequently Asked Questions</h2>
        <p className="faq-para">
          Discover more about the assessment and the Women Techsters Fellowship
          program. Feel free to reach out if the FAQ <br /> did not cover the
          question..
        </p>

        <QuestionsFaq
          question="How long does it take to complete the assessments?"
          answer="It takes an average of 5 minutes to complete the test and get your result."
        />
        <QuestionsFaq
          question="Can I retake assessments if I'm not satisfied with my results?"
          answer="No. The same email account can only retake the assessment after 6 months."
        />
        <QuestionsFaq
          question="Is my personal information kept confidential?"
          answer="Yes. Your information are 100% confidential..."
        />
        <QuestionsFaq
          question="How can I access my assessment results?"
          answer="It can be accessed from your mail when you request for result to be sent to mail"
        />
        <QuestionsFaq
          question="Are there any technical requirements to take the assessments?"
          answer="No. There are no technical requirements."
        />
        <QuestionsFaq
          question="How do I register for the Women Techsters Fellowship program?"
          answer="You can register through the Tech4dev website."
        />
        <QuestionsFaq
          question="Is there a fee to participate in the Women Techsters Fellowship program?"
          answer="All women techsters program is free.."
        />
        <QuestionsFaq
          question="What support services are available to participants during the program?"
          answer="Group support from fellow techsters, Accessible facilitators and more."
        />
        <QuestionsFaq
          question="Where is Women Techsters Fellowship located?"
          answer="Women techsters fellowship is an online platform and can be accessed anywhere in the world."
        />
        <QuestionsFaq
          question="How can I provide feedback or suggestions for improving the platform?"
          answer="Provision has been made for feedback session after assessment. You can also contact us via email."
        />
      </section>
    );
 }