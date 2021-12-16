import React from 'react';
import { FaEdit, FaLaptop, FaBriefcase, FaPortrait } from "react-icons/fa";
import './style.scss'
function Web() {
  return (
    <div className="web">
      <div className="web-option">
          <a href="#project">
          <FaEdit className="option-icon"/>  Projects
          </a>
      </div>
      <div className="web-option">
          <a href="#skills">
          <FaLaptop className="option-icon"/> Skills
          </a>
      </div>
      <div className="web-option">
          <a href="#work">
          <FaBriefcase className="option-icon"/>  Work
          </a>
      </div>
      <div className="web-option">
          <a href="#contact">
          <FaPortrait className="option-icon"/>  Contact
          </a>
      </div>
    </div>
  );
}

export default Web;
