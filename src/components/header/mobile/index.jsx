import React from 'react';
import { BsXLg } from "react-icons/bs";
import { FaEdit, FaLaptop, FaBriefcase, FaPortrait } from "react-icons/fa";
import './style.scss'
function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
          <BsXLg/>
      </div>
      <div className="mobile-options">
      <div className="mobile-option">
          <a href="#project">
          <FaEdit className="option-icon"/>
          Projects
          </a>
      </div>
      <div className="mobile-option">
          <a href="#skills">
          <FaLaptop className="option-icon"/>
          Skills
          </a>
      </div>
      <div className="mobile-option">
          <a href="#work">
          <FaBriefcase className="option-icon"/>
          Work
          </a>
      </div>
      <div className="mobile-option">
          <a href="#contact">
          <FaPortrait className="option-icon"/>
          Contact
          </a>
      </div>
      </div>
    </div>
  );
}

export default Mobile;
