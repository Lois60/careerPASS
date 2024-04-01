import "./HeroSection.css";
import { Button } from "../components/Button.jsx";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3 className="hero-title">Find Out Your Unique Strength With CareerPASS.</h3>
         <p>
          Harmoniously align with your innate abilities and aspirations in the tech industry. Tech4Dev CareerPASS can tell  <br /> you Get a detailed assessment of your unique strength, and potential area for development in your Tech Career.
        </p>
        <Button children="Take Assessment" />
      </div>
    </section>
  );
};
