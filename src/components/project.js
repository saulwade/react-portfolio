import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <img src={project.imgSrc} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
};

export default Project;
