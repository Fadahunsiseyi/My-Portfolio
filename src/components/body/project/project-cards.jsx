import React from 'react';
import './project-card.scss'

function ProjectCard({project}) {
  return (
    <div className="project-card">
      <div className="project-info">
          <label className="project-title">{project.title}</label>
          <div className="project-links">
              {project.demo && (
                  <a className="project-link" href={project.demo}>
                      <div className="link-button">
                          <i class="fi-rr-globe"></i>Demo
                      </div>
                  </a>
              )}
              {project.github && (
                  <a className="project-link" href={project.github}>
                  <div className="link-button">
                     <i class="devicon-github-original-wordmark colored"></i> Github
                  </div>
              </a>
              )}
          </div>
          <p>{project.about}</p>
          <div className="project-languages">
              {project.languages.map((language) => {
                  return (
                      <label className="language">{language}</label>
                  )
              })}
          </div>
      </div>
      <img src={project.image} alt="" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
