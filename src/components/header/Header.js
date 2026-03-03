import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        width: "100%",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px"
      }}
    >
      <Link
        to="/"
        className="logo"
        style={{ color: "blue", textDecoration: "none" }}
      >
        FREELANCE portfolio
      </Link>

      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        
        <Link to="/projects" style={{ color: "blue", textDecoration: "none" }}>
          <b>Projects</b>
        </Link>

        <Link to="/skills" style={{ color: "blue", textDecoration: "none" }}>
          <b>Skills</b>
        </Link>

        <Link to="/contacts" style={{ color: "blue", textDecoration: "none" }}>
          <b>Contacts</b>
        </Link>

        <BtnDarkMode />
      </nav>
    </header>
  );
};

export default Header;