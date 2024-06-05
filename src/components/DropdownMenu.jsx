import React, { useState } from "react";
import "./DropdownMenu.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        Learning tracks <RiArrowDropDownLine />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Blockchain</div>
          <div className="dropdown-item">Cybersecurity</div>
          <div className="dropdown-item">Data Science and AI</div>
          <div className="dropdown-item">Mixed Reality and 3D</div>
          <div className="dropdown-item">Mobile App Development</div>
          <div className="dropdown-item">Product Design UI/UX</div>
          <div className="dropdown-item">Software Development</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
