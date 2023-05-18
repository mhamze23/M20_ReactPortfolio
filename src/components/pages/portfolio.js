import React from 'react';
import '../../styles/style.css';
import vetSetGo from '../../styles/images/homepage.png';
import codeQuiz from '../../styles/images/Code Quiz.png';
import employeeTracker from '../../styles/images/employee tracker.png';
import horiseonProject from '../../styles/images/Horiseon Project.png';
import pokemonBattle from '../../styles/images/Pokemon Battle Project.gif';
import tpGenerator from '../../styles/images/TP Generator.png';

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-header">Check out some of my works below:</h1>
      <div className="portfolio-container">
        {/* List of projects */}
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
          <div className="project-card" key={index}>
            <img className="project-image" src={project.image} alt={`${project.title} screenshot`} />
            <div className="project-info">
              <h4 className="project-title">{project.title}</h4>
              <div className="project-links">
                <a href={project.link}>Deployed Application</a>
                <a href={project.repo}>Github Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
