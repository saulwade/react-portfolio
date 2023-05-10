import React from 'react';
import Project from './Project';

const Portfolio = () => {
  // Add your projects' information here
  const projects = [
    {
      title: 'Project 1',
      imgSrc: 'path/to/image1',
      deployedUrl: 'https://deployed-url-1',
      repoUrl: 'https://github.com/user/repo1'
    },
    // Add other projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
