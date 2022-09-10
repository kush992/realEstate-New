import React from "react";
import "./propertyList.css";

function PropertyList({
  address,
  images,
  message,
  user,
  contact,
  size,
  price,
}) {
  return (
    <div className="property-list">
      <div className="property-info">
        <h4>{user}</h4>
        <div className="property-flex">
          <img src={images} alt="" />
          <br />

          <h5>
            Price: {price}
            <br />
            Size: {size}
            <br />
            Contact Number: {contact}
            <br />
          </h5>
        </div>
        <p>
          <span>Address:</span> {address}
          <br />
          <br />
          <span>Description:</span> {message}
        </p>
      </div>
    </div>
  );
}

export default PropertyList;
