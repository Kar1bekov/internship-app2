import React from "react";
import "./page.css";

const Projects = () => {
  return (
    <section className="page">
      <h1 className="title">Projects</h1>

      <div className="projects-grid">
        <img src="/img/projects/01.jpg" alt="project" />
        <img src="/img/projects/02.jpg" alt="project" />
        <img src="/img/projects/03.jpg" alt="project" />
        <img src="/img/projects/04.jpg" alt="project" />
        <img src="/img/projects/05.jpg" alt="project" />
        <img src="/img/projects/06.jpg" alt="project" />
      </div>
    </section>
  );
};

export default Projects;
