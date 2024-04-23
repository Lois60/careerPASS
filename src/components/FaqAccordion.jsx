import './FaqAccordion.css'
import {QuestionsFaq} from "../components/QuestionsFaq.jsx";
import { BellCon } from "./BellCon.jsx";

 export const FaqAccordion = () =>{
    return(
        <section className="faq-section">
          <h2 className="faq-text">Frequently Asked Questions</h2>
          <p className="faq-para">Discover more about the assessment and the Women Techsters Fellowship program. Feel free to reach out if the FAQ  <br /> did not cover the question..</p>

< QuestionsFaq  question="How long does it take to complete the assessments?" answer="" />
      < QuestionsFaq question="Can I retake assessments if I'm not satisfied with my results?" answer="" />
      < QuestionsFaq question="Is my personal information kept confidential?" answer="" />
      < QuestionsFaq question="How can I access my assessment results?" answer="" />
      < QuestionsFaq question="Are there any technical requirements to take the assessments?" answer="" />
      < QuestionsFaq question="How do I register for the Women Techsters Fellowship program?" answer="" />
      < QuestionsFaq question="Is there a fee to participate in the Women Techsters Fellowship program?" answer="" />
      < QuestionsFaq question="What support services are available to participants during the program?" answer="" />
      < QuestionsFaq question="Where is Women Techsters Fellowship located?" answer="" />
      < QuestionsFaq question="How can I provide feedback or suggestions for improving the platform?" answer="" />
      
        </section>
    )
 }