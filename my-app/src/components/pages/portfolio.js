import React from 'react';
import '../../styles/style.css';

import vetSetGo from '../../styles/images/homepage.png';
import codeQuiz from '../../styles/images/Code Quiz.png';
import employeeTracker from '../../styles/images/employee tracker.png';
import horiseonProject from '../../styles/images/Horiseon Project.png';
import pokemonBattle from '../../styles/images/Pokemon Battle Project.gif';
import tpGenerator from '../../styles/images/TP Generator.png';
import hePrints from '../../styles/images/HappilyEverPrints.png';

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-header">Take a look at some of my projects:</h1>
      <div className="portfolio-container">
        {[
          {
            title: 'VetSet Go',
            image: vetSetGo,
            repo: 'https://github.com/mhamze23/P2_Vetset-Go',
          },
          {
            title: 'Code Quiz',
            image: codeQuiz,
            repo: 'https://github.com/mhamze23/Module-4_WebApi',
          },
          {
            title: 'Employee Tracker',
            image: employeeTracker,
            repo: 'https://github.com/mhamze23/Module12_SQL',
          },
          {
            title: 'Horiseon Project',
            image: horiseonProject,
            repo: 'https://github.com/mhamze23/Module1-Challenge',
          },
          {
            title: 'Pokemon Battle Project',
            image: pokemonBattle,
            repo: 'https://github.com/mhamze23/P1_6PokemonMaster',
          },
          {
            title: 'Team Profile Generator',
            image: tpGenerator,
            repo: 'https://github.com/mhamze23/Module10_OPP',
          },
          {
            title: 'Happily Ever Prints',
            image: hePrints,
            repo: 'https://github.com/mhamze23/P3_HappilyEverPrints',
          },
        ].map((project, index) => (
          <div className="project-card" key={index} onClick={() => window.open(project.repo)}>
            <img className="project-image" src={project.image} alt={`${project.title} screenshot`} />
            <div className="project-info">
              <h4 className="project-title">{project.title}</h4>
              <div className="project-links">
                <a href={project.repo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
