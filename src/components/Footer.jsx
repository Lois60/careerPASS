import { SocialCons } from "../components/SocialCons.jsx";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { MainLogo } from "../components/Logo.jsx";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <Link to="/">
          <MainLogo />
        </Link>
        <Link to="/" className="para-foot">
          CareerPASS
        </Link>
        <div className="column">
          <h4>Contact us</h4>
          <h6>
            <a href="mailto:Wtfellowship@tech4dev.com">
              <IoIosMail size={10} color="#918D92" /> Wtfellowship@tech4dev.com
            </a>
            <br />
          </h6>

          <h6>
            <FaPhone size={10} color="#918D92" />
            {""} (+234) 904 329 8729
          </h6>
        </div>
        <div className="column">
          <h4>Follow us on</h4>
          <div className="social-icons-column">
            <SocialCons size={20} color="#918D92" />
          </div>
        </div>
      </div>
      <div className="foot-pri">
        <span>Privacy Policy</span>

        <span className="pri-span">Terms & Conditions</span>
      </div>
    </footer>
  );
};
