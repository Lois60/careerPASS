import { SocialCons } from "../components/SocialCons.jsx";
import "./FooterTwo.css";
export const FooterTwo = () => {
  return (
    <footer className="main-footer">
      <div className="column">
        <h5>Women Techsters @2024</h5>
      </div>
      <div className="column">
        <a href="mail to:Wtfellowship@tech4dev.com">
          Email:Wtfellowship@tech4dev.com
        </a>
        <SocialCons size={20} color="#000000" />
      </div>
      <div className="column">
        <h5>(+234)904 329 8729</h5>
      </div>
    </footer>
  );
};
