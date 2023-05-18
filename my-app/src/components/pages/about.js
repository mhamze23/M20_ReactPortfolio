import React from 'react';
import '../../styles/style.css';
import profilePic from "../../styles/images/HM.Profile.jpg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img className="about-image" src={profilePic} alt="Hamze at a restaurant" />
        <div className="about-text">
          <h1 className="about-heading">Greetings! I'm Hamze.</h1>
          <p className="about-description">
            Thank you for taking the time to visit my portfolio. I'm thrilled to have the opportunity to present my projects and demonstrate my proficiency in web development. I invite you to delve into my work and hopefully find inspiration in what you discover.
          </p>
          <p className="about-description">
            As a Full Stack Web Developer, I possess a solid foundation in web development, backed by a certificate from the esteemed University of Toronto and an advanced diploma in Business Administration. Moreover, I have honed my skills through a graduate certificate in project management from Algonquin College. Drawing on my expertise in problem-solving, coding, and collaboration, my primary objective is to craft exceptional products that offer scalable solutions and effectively cater to the needs of end-users.
          </p>
        </div>
      </div>
    </section>
  );
}
