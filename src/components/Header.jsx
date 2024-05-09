import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { MainLogo } from "../components/Logo.jsx";
import { Button } from "../components/Button.jsx";


export const Header = () => {

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <MainLogo />
          </Link>
          <Link to="/" className="para-ca">
            CareerPASS
          </Link>
          {/* <Link to='/'>
          <p>CareerPASS</p>
          </Link> */}
        </div>

        <div className="header-items">
          <ul>
            {/* <li>
            <Link to="/Home">Home</Link>
          </li> */}

            <li>
              <Link to="/About-Us">About us</Link>
            </li>

            {/* <li>
              <Link to="/Learning-Tracks">Learning tracks</Link>
            </li> */}
            <li>
              <Link to="/Contact-Us">Contact Us</Link>
            </li>
          </ul>
          <div className="button-container">
            <Button
              onClick={() => (window.location.href = "/RegisterForm")}
              children="Take Assessment"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
