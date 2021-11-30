import React from 'react';
import './style.scss'
function Web() {
  return (
    <div className="web">
      <div className="web-option">
          <a href="#project">
          <i class="fi fi-rr-edit option-icon"></i>Projects
          </a>
      </div>
      <div className="web-option">
          <a href="#skills">
          <i class="fi fi-rr-laptop option-icon"></i>Skills
          </a>
      </div>
      <div className="web-option">
          <a href="#work">
          <i class="fi fi-rr-briefcase option-icon"></i>Work
          </a>
      </div>
      <div className="web-option">
          <a href="#contact">
          <i class="fi fi-rr-portrait option-icon"></i>Contact
          </a>
      </div>
    </div>
  );
}

export default Web;
