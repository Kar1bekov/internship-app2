import React from "react";
import "./page.css";

const Project = () => {
  return (
    <section className="page">
      <h1 className="title">Project</h1>

      <img
        src="/img/projects/02-big.jpg"
        alt="project"
        className="project-big"
      />

      <p className="skills-text">
        Skills: React, Node.js, MongoDB
      </p>

      <button className="btn">Visit website</button>
    </section>
  );
};

export default Project;
