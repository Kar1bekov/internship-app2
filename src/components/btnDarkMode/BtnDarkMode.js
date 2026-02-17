import React, { useState, useEffect } from "react";
import "./style.css";

const BtnDarkMode = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    dark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [dark]);

  return (
    <button className="theme-btn" onClick={() => setDark(!dark)}>
      {dark ? "☀" : "🌙"}
    </button>
  );
};

export default BtnDarkMode;
