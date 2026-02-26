import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
    },
    {
      title: "Todo App",
      description: "Simple todo application with local storage.",
    },
    {
      title: "E-commerce UI",
      description: "Frontend design for online store.",
    },
  ];

  return (
    <section
      style={{
        minHeight: "80vh",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "40px" }}>My Projects</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              padding: "20px",
              borderRadius: "15px",
              background: "#1e1e1e",
              color: "white",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>{project.title}</h3>
            <p style={{ marginBottom: "20px" }}>{project.description}</p>

            <button
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                background: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;