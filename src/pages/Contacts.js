import React from "react";
import "./page.css";

const Contacts = () => {
  return (
    <section className="page">
      <h1 className="title">Contacts</h1>

      <div className="contacts-block">
        <p>Email: example@mail.com</p>
        <p>Phone: +996 555 555 555</p>
      </div>
    </section>
  );
};

export default Contacts;
