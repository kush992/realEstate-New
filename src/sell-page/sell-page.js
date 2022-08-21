/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import db from "../firebase";
import "./sell-page.css";

const Selling = ({ roomID }) => {
  const [user, setUser] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [size, setSize] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");

  const [images, setImages] = useState("");

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("recentProperty")
      .add({
        user: user,
        price: price,
        message: message,
        size: size,
        contactNum: contactNum,
        address: address,
        images: images,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });

    setUser("");
    setPrice("");
    setMessage("");
    setSize("");
    setContactNum("");
    setAddress("");
    setImages("");
  };

  return (
    <div className="contact-main">
      <section className="home-main">
        <h1 className="hed-selling">
          SELLING A HOME 🏠 <br />
          <span>START YOUR JOURNEY WITH US TODAY</span>
        </h1>
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p><br/>    */}
      </section>
      <form className="selling-form" onSubmit={handleSubmit}>
        <div className="container-selling">
          <input
            className="selling-input"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <br />

          <input
            className="selling-input"
            placeholder="Contact Number"
            value={contactNum}
            inputMode="number"
            onChange={(e) => {
              let phoneNum = e.target.value;
              phoneNum = phoneNum.slice(0, 9);
              setContactNum(phoneNum);

              if (phoneNum.length !== 9) {
                setError("Phone Numebr should be of 9 digits");
              } else {
                setError("phone number is required field");
              }
            }}
          />
          <br />
          <br />
          {error}
          <input
            className="selling-input"
            placeholder="Size of House"
            value={size}
            inputMode="number"
            onChange={(e) => setSize(e.target.value)}
          />
          <br />
          <br />

          <input
            className="selling-input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <br />

          <input
            className="selling-input"
            placeholder="Price"
            value={price}
            inputMode="number"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />

          <input
            className="selling-input"
            placeholder="Enter Image URL"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
          <br />
          <br />

          <textarea
            className="selling-input-msg"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <br />

          <button className="selling-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Selling;
