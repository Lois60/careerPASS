
import './SocialCons.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
export const SocialCons = ({ size, color }) => {
    return (
      <div className='social-media-icons-container'>
        
        <FaFacebook className="social-media-icon" size={size} color={color} />
        <FaLinkedin  className="social-media-icon"size={size} color={color} />
        <FaTwitter  className="social-media-icon" size={size} color={color} />
        <FaInstagram className="social-media-icon" size={size} color={color} />
       
        
      </div>
    );
};