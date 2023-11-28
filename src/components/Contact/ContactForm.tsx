import React from "react";
import "./style.scss";
import { useState } from "react";
import { useForm } from "@formspree/react";

const ContatoForm = () => {
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const confirmSubmit = () => {
    var confirmation = document.getElementById("confirmation_message");
    if (confirmation?.style.visibility !== undefined) {
      confirmation.style.visibility = "hidden";
      setNome("");
      setEmail("");
      setComment("");
      setTimeout(() => {
        if (confirmation?.style.visibility !== undefined)
          confirmation.style.visibility = "visible";
      }, 300);
    }
    return "true";
  };

  const [state, handleSubmit] = useForm("xayzqblp", {
    data: {
      confirmSubmit,
    },
  });

  return (
    <form className="contact_form_wrapper" onSubmit={handleSubmit} method="POST">
      <h3>Entre em contato comigo!</h3>
      <input
        id="name"
        type="text"
        name="name"
        className="contact_input_field"
        placeholder="Nome"
        onChange={(event) => setNome(event.target.value)}
        value={name}
        required
      ></input>
      <input
        id="email"
        type="email"
        name="email"
        className="contact_input_field"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        required
      ></input>
      <textarea
        id="message"
        className="contact_textarea"
        placeholder="Sua mensagem"
        onChange={(event) => setComment(event.target.value)}
        value={comment}
        name="message"
        required
      ></textarea>
      <p id="confirmation_message">
        Mensagem enviada! Entraremos em contato o mais rápido possível.
      </p>
      <input
        type="submit"
        className="contact_submit_button"
        value="Enviar"
        disabled={state.submitting}
      />
    </form>
  );
};

export default ContatoForm;