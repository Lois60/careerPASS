import React from "react";
import { Link, useNavigate } from "react-router-dom"

import "./Header.css";
import { MainLogo } from "../components/Logo.jsx";
import { Button } from "../components/Button.jsx";
import DropdownMenu from "./DropdownMenu.jsx";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/RegisterForm");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logoImg">
            <Link to="/">
              <MainLogo />
            </Link>
          </div>
          <Link to="/" className="para-ca">
            <h3>CareerPASS</h3>
          </Link>
        </div>

        <div className="header-items">
          <ul>
            {/* <li>
            <Link to="/Home">Home</Link>
          </li> */}

            <li>
              <Link to="/About-Us">
                About <span className="lg-text">us</span>
              </Link>
            </li>

            {/* <li>
              <Link to="/Learning-Tracks">Learning tracks</Link>
            </li> */}
            <li>
              <DropdownMenu />
            </li>
          </ul>
          <div className="button-container">
            <Button onClick={handleNavigate} children="Get Started" />
          </div>
        </div>
   
      </div>
    </header>
  );
};
