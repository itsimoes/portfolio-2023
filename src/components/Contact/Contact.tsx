import React from "react";
import "./style.scss";
import ContatoForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="contact_message_container">
        <div id="contact_message_1">
          Quer deixar seu projeto com sua cara? <br />{" "}
          <span>entre em contato.</span>
        </div>
        <div id="contact_message_2">Sites, blogs e aplicações web.</div>
      </div>
      <div className="contact_form_container">
        <h2 className="contact_form_title">Contato</h2>
        <ContatoForm />
      </div>
    </div>
  );
};

export default Contact;
