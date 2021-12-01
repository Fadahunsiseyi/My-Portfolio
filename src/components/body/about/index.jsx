import React from 'react';
import './style.scss'
import Img from './img1.png';
import SocialContact from '../../common/social-contact';


function About() {
  return (
    <div className="about">
      <div className="about-top">
          <div className="about-info">
              Hello, i'm 
              <br/> <span className="info-name"> Fadahunsi Oluwaseyi</span>, 
              <br/>I am a Software Engineer.
          </div>
          <div className="about-photo">
             <img src={Img} alt="" className="picture" />
          </div>
      </div>
      <div className="about-bottom"> <SocialContact/> </div>
    </div>
  );
}

export default About;
