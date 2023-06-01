import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from "../../styles/images/HM.Profile.jpg";

export default function About() {
  return (
    <section className="about-section py-5">
      <Container className="about-container">
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <Image className="about-image img-fluid profile-pic" src={profilePic} alt="Hamze at a restaurant" />
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h1 className="about-heading">Greetings! I'm Hamze.</h1>
              <p className="about-description">
                Welcome to my portfolio, and thank you for your interest in my work.
                <br /><br />
                It's an honor to share my projects with you, each showcasing my commitment to excellence in web development. Dive in, explore, and I hope you find inspiration amidst these digital canvases.
                <br /><br />
                With a strong grounding in full stack web development –– fortified by a certificate from the prestigious University of Toronto, an advanced Business Administration diploma, and a graduate certificate in project management from Algonquin College –– I am well-equipped to handle diverse web development challenges.
                <br /><br />
                My expertise in problem-solving, coding, and collaboration fuels my passion: to build outstanding, scalable solutions that are finely tuned to the specific needs of end-users.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
