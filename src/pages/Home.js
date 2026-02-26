import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url(/img/header-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="hero-content"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1>
          Hi, my name is <strong>Uli</strong>
        </h1>
        <p>Frontend developer</p>
        <p>with passion for learning and creating.</p>
      </div>

      <button
        className="btn-primary"
        onClick={() => navigate("/projects")}
        style={{
          backgroundColor: "green",
          borderRadius: "15px",
          padding: "15px 35px",
          fontSize: "18px",
          marginTop: "25px",
          cursor: "pointer",
        }}
      >
        Download CV
      </button>
    </section>
  );
};

export default Home;