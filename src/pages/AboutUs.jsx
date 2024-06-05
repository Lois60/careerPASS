import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-pic">
        <div className="aboutImage">
          <img src="./AboutPic.png" alt="about" />
        </div>

        <div className="welcome-about">
          <div className="welcome-text">
            <h2>Welcome To CareerPASS</h2>
            <p>Find Out Your Unique Strength</p>
          </div>
        </div>
      </div>

      <div className="about-text">
        <p className="about-para">
          CareerPASS Psychometric Assessment is designed to assist applicants in
          identifying the learning track that best aligns with their <br />{" "}
          cognitive abilities, personality traits, aptitudes, and skills. This
          assessment will provide valuable insights and recommendations to{" "}
          <br /> guide applicants toward their most suitable learning path,
          ultimately enhancing their chances of success in the fellowship.{" "}
        </p>
      </div>

      <div className="about-text">
        <h3 className="sec-title">Section 1: Cognitive Abilities</h3>
        <p className="about-para">
          1. Mathematical Aptitude: This section evaluates applicants'
          mathematical problem-solving skills. The questions presented here
          range <br />
          from basic arithmetic to more complex mathematical reasoning, allowing
          us to assess their quantitative abilities effectively.
          <br />
          <br />
          2.Logical Reasoning: This process evaluates logical thinking by
          presenting scenarios with missing information and asking applicants{" "}
          <br />
          to deduce the most likely outcomes or explanations.
        </p>
      </div>

      <div className="about-text">
        <h3 className="sec-title">Section 2: Personality Traits </h3>
        <p className="about-para">
          Introversion vs. Extroversion: This uses questions that gauge how
          applicants feel in social settings and whether they draw energy from{" "}
          <br />
          solitude or social interactions.
          <br />
          <br />
          1. Openness to Experience: Assess applicants' openness to new
          experiences and ideas.
          <br />
          <br />
          2. Conscientiousness: Evaluate how organized and detail-oriented
          applicants are, which is vital for certain learning tracks.
          <br />
          <br />
          3. Emotional Stability: Assess emotional resilience and how applicants
          handle stress or pressure.
          <br />
          <br />
          4. Agreeableness vs. Assertiveness: Determine whether applicants are
          more cooperative and agreeable or assertive and competitive.
        </p>
      </div>

      <div className="about-text">
        <h3 className="sec-title">Section 3: Creativity and Innovation </h3>
        <p className="about-para">
          This section tests creative problem-solving. It presents real-world
          problems and asks applicants to propose innovative solutions.
          <br />
          <br />
          1. Imagination: It also assesses their ability to think creatively by
          asking them to describe imaginative scenarios or solutions.
        </p>
      </div>

      <div className="about-text">
        <h3 className="sec-title">Section 4: Aptitudes </h3>
        <p className="about-para">
          Evaluate their technical inclination, which may be crucial for some
          learning tracks.
          <br />
          <br />
        </p>
      </div>

      <div className="about-text">
        <h3 className="sec-title">
          {" "}
          Section 5: Skills and Interests Skills Assessment{" "}
        </h3>
        <p className="about-para">
          Have applicants indicate their proficiency or interest in various
          technical and creative skills, such as programming <br />
          languages, design software, or artistic skills.
          <br />
          <br />
        </p>
      </div>
      <div className="about-text">
        <h3 className="sec-title">The Women Techsters </h3>
        <p className="about-para">
          The Women Techsters initiative is aimed at bridging the digital and
          technology knowledge divide between men and women as well as ensuring
          equal access to opportunities for all. We are empowering girls and
          women across Africa with varying degrees of digital, deep tech and
          soft skills required within the technology ecosystem. The initiative
          will empower 5million African women over the next 10 years (2020-2030)
          through a series of activities holding simultaneously across different
          countries. Our objective is to grow and support an army of tech
          empowered girls and women across Africa who will have equal access to
          decent job opportunities as well as build and scale their ideas into
          tech-enabled businesses and deep tech startups, which will aid
          Africa’s economic growth.
          <br />
          <br />
        </p>
        <button className="learn-btn">Learn More</button>
      </div>
    </section>
  );
};
