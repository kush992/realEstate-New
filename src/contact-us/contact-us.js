/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import db from "../firebase";
import "./contact-us.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-main">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="hed">Contact Us 📱 </h1>
        <div className="container">
          <p>
            <strong>Feel free to drop us a line below!</strong>
          </p>
          <br />
          <br />

          <input
            className="contact-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />

          <input
            className="contact-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <textarea
            className="contact-input-msg"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <br />

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
