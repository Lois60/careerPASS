import "./CardSection.css";
import { Button } from "../components/Button.jsx";
import { Cards } from "../components/Cards.jsx";

export const CardSection = () => {
  return (
    <section className="card-section">
      <div className="card-row">
        <Cards
          imageUrl="/ProductDesign.png"
          title="Product Design (UI/UX)"
          description="Product design involves the creation of new products, from ideation to prototyping to final production, with a focus on user interface (UI) and user experience (UX) design, which are essential elements in the development of successful and effective products."
        />

        <Cards
          imageUrl="/BlockChain.png"
          title="Blockchain"
          description="Blockchain development involves designing and building decentralized applications using blockchain technology. Learn the fundamentals of blockchain technology, including smart contracts and distributed ledgers, and how to build and deploy blockchain."
        />
      </div>

      <div className="card-row">
        <Cards
          imageUrl="/SoftDev.png"
          title="Software Development"
          description="Software development (web development) is the process of designing, building, testing, and maintaining software application. It is focused on web development using HTML, CSS, and JavaScript to create dynamic and responsive websites and."
        />

        <Cards
          imageUrl="/ProductManger.png"
          title="Product Management"
          description=" Product management involves overseeing all aspects of a product, from conception to market launch and beyond. It requires a deep understanding of user needs and market demands. Product strategy, Conduct market research, create a product roadmap."
        />
      </div>

      <div className="card-row">
        <Cards
          imageUrl="/CyberSecurity.png"
          title="Cybersecurity"
          description="Cybersecurity and Ethical Hacking involves the protection of computer systems, networks, and data from theft, damage and unauthorized access, as well as the identification and exploitation of vulnerabilities to improve security measures. Learn both."
        />

        <Cards
          imageUrl="/MixedReal.png"
          title="Mixed Reality & 3D"
          description="3D modeling, Animation, and mixed reality involves creating immersive virtual experiences. Learn how to design and create 3D models, animate objects and characters, and build mixed reality experience. How to use industry-standard tools and techniques for."
        />
      </div>

      <div className="card-row">
        <Cards
          imageUrl="/DataScience.png"
          title="Data Science & AI"
          description="Data science and AI involves the end-to-end process of extracting insights and knowledge from data using various tools and techniques, as well as designing, building and managing the infrastructure required to effectively process and analyze large datasets."
        />

        <Cards
          imageUrl="/MobileApp.png"
          title="Mobile App Development"
          description="Mobile application development involves creating software applications that run on mobile devices such as smartphones and tablets. Learn how to design, develop, and deploy mobile applications for iOS and Android platforms. User interface and user."
        />
      </div>

      <div className="call-action">
        <div className="call-action-content">
          <h1 className="class-title">
            Explore Tech with an{" "}
            <span style={{ color: "#FEAA6D" }}>Advantage</span>
          </h1>
          <p className="class-text">
            CareerPASS Psychometric assessment help you to enhance your
            effectiveness by matching you with the optimal learning track
            based on your test result. <br /> Saves you the worry of figuring
            the  tech skill to learn and increase your adaptability {" "}
            rate by 80%.”{" "}
          </p>
        </div>
        <Button children="Take Assessment" />
      </div>
    </section>
  );
};
