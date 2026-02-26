import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h1 className="title-1">Skills</h1>

        <div className="content-list">
          <div className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>
              JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </p>
          </div>

          <div className="content-list__item">
            <h2 className="title-2">Backend</h2>
            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;