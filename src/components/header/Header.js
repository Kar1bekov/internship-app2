import React from "react";
import "./style.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

const Header = () => {
  const openWindow = (page) => {
    window.open(`/${page}.html`, "_blank", "width=1400,height=760");
  };

  return (
    <header className="header">
      <div className="logo">Freelance portfolio</div>

      <nav>
        <button onClick={() => openWindow("projects")}>Projects</button>
        <button onClick={() => openWindow("skills")}>Skills</button>
        <button onClick={() => openWindow("contacts")}>Contacts</button>
        <BtnDarkMode />
      </nav>
    </header>
  );
};

export default Header;
