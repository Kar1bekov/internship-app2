import React from "react";
import "./page.css";

const Contacts = () => {
  return (
    <section className="page">
      <h1 className="title">Contacts</h1>

      <div className="contacts-block">
        <a className="contact-link" href="mailto:example@mail.com">
          Email: example@mail.com
        </a>

        <a className="contact-link" href="tel:+996555555555">
          Phone: +996 555 555 555
        </a>

        <div className="socials">
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
            />
          </a>

          <a
            href="https://wa.me/996555555555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              alt="WhatsApp"
            />
          </a>

          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
              alt="Telegram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;