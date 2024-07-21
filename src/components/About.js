import React from 'react';
import './About.css'; 
import devontePhoto from '../assets/Devonte_Harris2.jpg'; 

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-text">
        <h1>Who am I?</h1>
        <p>
          Hello, my name is Devonte Harris, I aspire to be a software engineer, currently working towards my bachelor's degree in information technology. Why I'm drawn to software engineering and development of applications is that I love to be a factor in creating applications that provide a user-friendly experience and contribute to something positive in our society. My mission is to ensure whatever website, software, and application I commit to, provides an experience that caters to everyone's specific needs.
        </p>
      </div>
      <div className="about-me-photo">
        <img src={devontePhoto} alt="Devonte Harris" />
      </div>
    </div>
  );
};

export default About;
