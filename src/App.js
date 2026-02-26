import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
  
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route
          path="/project"
          element={
            <>
              <Project />
              <Footer />
            </>
          }
        />

        <Route
          path="/skills"
          element={
            <>
              <Skills />
              <Footer />
            </>
          }
        />


        <Route
          path="/contacts"
          element={
            <>
              <Contacts />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;