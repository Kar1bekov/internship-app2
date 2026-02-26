import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="#">
          <img src="/img/icons/vk.svg" alt="VK" />
        </a>
        <a href="#">
          <img src="/img/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="#">
          <img src="/img/icons/twitter.svg" alt="Twitter" />
        </a>
        <a href="#">
          <img src="/img/icons/gitHub.svg" alt="GitHub" />
        </a>
        <a href="#">
          <img src="/img/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>

      <p className="copyright">
        © 2022 frontend-dev.com
      </p>
    </footer>
  );
};

export default Footer;