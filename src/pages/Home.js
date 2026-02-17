import React from "react";

const Home = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url(/img/header-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="hero-content">
        <h1>
          Hi, my name is <strong>Asan</strong>
        </h1>
        <p>Frontend developer</p>
      </div>
    </section>
  );
};

export default Home;
