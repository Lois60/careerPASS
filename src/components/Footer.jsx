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
        <div className="new-div">
          <Link to="/">
            <MainLogo />
          </Link>
          <Link to="/" className="para-foot">
            CareerPASS
          </Link>
        </div>
        <div className="columns">
          <div className="column">
            <Link to="/Contact-Us">
              <h4> Contact us</h4>
            </Link>
            <div className="contact">
              <h6>
                <IoIosMail size={20} color="#918D92" />
                <a href="mailto:Wtfellowship@tech4dev.com">
                  <span>Wtfellowship@tech4dev.com</span>
                </a>
                <br />
              </h6>

              <h6>
                <FaPhone size={20} color="#918D92" />
                <span>(+234) 904 329 8729</span>
              </h6>
            </div>
          </div>
          <div className="column">
            <h4>Follow us on</h4>
            <div className="social-icons-column">
              <SocialCons size={20} color="#918D92" />
            </div>
          </div>
        </div>
      </div>

      <div className="foot-pri">
        <span> Privacy Policy</span>

        <span className="pri-span">Terms & Conditions</span>
      </div>
    </footer>
  );
};
