import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';

const Layout = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", fontFamily: "sans-serif" }}>
      
      {/* Верхнее меню справа */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        display: "flex",
        gap: "10px"
      }}>
       <Link to="/" style={linkStyle}>Home</Link>
       <Link to="/projects" style={linkStyle}>Projects</Link>
       <Link to="/contacts" style={linkStyle}>Contacts</Link>

      </div>
    </div>
  );
};

// Стили для кнопок
const linkStyle = {
  padding: "8px 16px",
  backgroundColor: "#4CAF50",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer"
};


export default Layout;
