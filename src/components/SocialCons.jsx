import "./SocialCons.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const SocialCons = ({ size, color }) => {
  return (
    <div className="social-media-icons-container">
      <ul className="socialMediaList">
        <li className="socialMediaListItem">
          <span>Facebook</span>
          <div className="socialIconDiv">
            <FaFacebook
              className="social-media-icon"
              size={size}
              color={color}
            />
          </div>
        </li>
        <li className="socialMediaListItem">
          <span>LinkedIn</span>
          <div className="socialIconDiv">
            <FaLinkedin
              className="social-media-icon"
              size={size}
              color={color}
            />
          </div>
        </li>
        <li className="socialMediaListItem">
          <span>Twitter</span>
          <div className="socialIconDiv">
            <FaXTwitter
              className="social-media-icon"
              size={size}
              color={color}
            />
          </div>
        </li>
        <li className="socialMediaListItem">
          <span>Instagram</span>
          <div className="socialIconDiv">
            <FaInstagram
              className="social-media-icon"
              size={size}
              color={color}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
