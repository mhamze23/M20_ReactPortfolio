// Importing necessary libraries and styles
import React from 'react';
import '../../styles/style.css';

// Importing project images
import vetSetGo from '../../styles/images/homepage.png';
import codeQuiz from '../../styles/images/Code Quiz.png';
import employeeTracker from '../../styles/images/employee tracker.png';
import horiseonProject from '../../styles/images/Horiseon Project.png';
import pokemonBattle from '../../styles/images/Pokemon Battle Project.gif';
import tpGenerator from '../../styles/images/TP Generator.png';

// The Portfolio component, which will be exported and used in the app
export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-header">Take a look at some of my projects:</h1>
      <div className="portfolio-container">
        {/* Mapping over each project in the array and displaying its details */}
        {[
          {
            title: 'Vetset Go',
            image: vetSetGo,
            link: 'https://whispering-coast-03143.herokuapp.com/',
            repo: 'https://github.com/mhamze23/P2_Vetset-Go',
          },
          {
            title: 'Code Quiz',
            image: codeQuiz,
            link: 'https://mhamze23.github.io/Module-4_WebApi/',
            repo: 'https://github.com/mhamze23/Module-4_WebApi',
          },
          {
            title: 'Employee Tracker',
            image: employeeTracker,
            link: '#',
            repo: 'https://github.com/mhamze23/Module12_SQL',
          },
          {
            title: 'Horiseon Project',
            image: horiseonProject,
            link: 'https://mhamze23.github.io/Module1-Challenge/',
            repo: 'https://github.com/mhamze23/Module1-Challenge',
          },
          {
            title: 'Pokemon Battle Project',
            image: pokemonBattle,
            link: 'https://ashketchumandpikachu.github.io/PokemonBattle/',
            repo: 'https://github.com/mhamze23/P1_6PokemonMaster',
          },
          {
            title: 'Team Profile Generator',
            image: tpGenerator,
            link: '#',
            repo: 'https://github.com/mhamze23/Module10_OPP',
          },
        ].map((project, index) => (
          // Each project is displayed in its own card
          <div className="project-card" key={index}>
            {/* The project image */}
            <img className="project-image" src={project.image} alt={`${project.title} screenshot`} />
            <div className="project-info">
              {/* The project title */}
              <h4 className="project-title">{project.title}</h4>
              <div className="project-links">
                {/* Links to the deployed application and the GitHub repository */}
                <a href={project.link}>View Project</a>
                <a href={project.repo}>View on GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
