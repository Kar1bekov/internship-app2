import React from "react";

const Home = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url(/img/header-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px"
      }}
    >
      <div 
        className="hero-content"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px" // 👈 расстояние между текстами
        }}
      >
        <h1>
          Hi, my name is <strong>Asan</strong>
        </h1>
        <p>Frontend developer</p>
        <p>with passion for learning and creating.</p>
      </div>

      <button
        className="btn-primary"
        style={{
          backgroundColor: "green",
          borderRadius: "10px",
          padding: "15px 35px", // 👈 кнопка больше
          fontSize: "18px",     // 👈 текст больше
          marginTop: "25px",    // 👈 отступ сверху
          cursor: "pointer"
        }}
      >
        Download CV
      </button>
    </section>
  );
};

export default Home;