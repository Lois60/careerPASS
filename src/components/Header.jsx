import React, { useState } from 'react';
import './Header.css';
import { MainLogo } from "../components/Logo.jsx";
import { Button } from "../components/Button.jsx";

export const Header = () => {
 

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <MainLogo />
          <p>CareerPASS</p>
        </div>
        <div className='header-items'>
      
          <ul>
            <li>
              <a href="#/About Us">About Us</a>
            </li>
            <li>
              <a href="#/Learning Track">Learning Track</a>
            </li>
            <li>
              <a href="#/Contact Us">Contact Us</a>
            </li>
          </ul>
          <div className="button-container">
            <Button children="Take Assessment" />
          </div>
        </div>
      </div>
    </header>
  );
};
