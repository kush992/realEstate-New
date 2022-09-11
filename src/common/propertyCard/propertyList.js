import React from "react";
import "./propertyList.css";

const PropertyList = ({ images, price, user, address, contact, size, message }) => {
  return (
    <div className="home-details-card">
      <div className="card-img">
        <img src={images} alt="user-home" />
      </div>
      <div className="card-details">
        <div>
          <p>Name: {user}</p>
          <p>Price: {price}PLN</p>
          <p>Address: {address}</p>
          <p>Contact Information: {contact}</p>
          <p>Size: {size}</p>
        </div>
        <div className="card-footer">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
