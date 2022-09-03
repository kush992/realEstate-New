/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import db from "../firebase";
import "./contact-us.css";
import { generalRegex, emailRegex } from "../utils/utility";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => setPopup(true))
      .catch((error) => console.error(error));

    setName("");
    setEmail("");
    setMessage("");
  };

  const isEmailValid = email && email.length > 2 && emailRegex.test(email);
  const isNameValid = name && name.length > 1 && generalRegex.test(name);
  const isSubmitDisable = isNameValid || !isEmailValid || name === "" || email === "" || message === "" || message.length > 120;

  const count = message.length;

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <h2>We are always happy to find out what's on your mind</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${isNameValid && "error-boundary"}`}
          required
          autoFocus
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${isEmailValid === false && "error-boundary"} text-transform__normal`}
          required
        />
        <textarea
          type="textarea"
          placeholder="Message Content"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={120}
          required
        />
        <p>{120-count}/120 characters left</p>
        <button
          type="submit"
          disabled={isSubmitDisable}
          className={`${isSubmitDisable ? "cursor__not-allowed" : ""}`}
        >
          Submit
        </button>
      </form>
      {popup && <p>Your form has been submitted. Thank you for contacting us 📱</p>}
    </div>
  );
};

export default Contact;
