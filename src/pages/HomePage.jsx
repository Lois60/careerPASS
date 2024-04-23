import { HeroSection } from "../components/HeroSection";
import {Record} from  "../components/Record.jsx";
import {CardSection } from "../components/CardSection.jsx";
import {FaqAccordion} from "../components/FaqAccordion.jsx";
import {Footer} from "../components/Footer.jsx";

export const HomePage =() =>{
  return (
   <>
   <HeroSection />
   <Record />
   <CardSection />
   <FaqAccordion />
 
   </>
  )
}
