import React, { useState, useEffect } from "react";
import { BrowserRouter as useParams } from "react-router-dom";
import db from "../../firebase";
import Home from "./home-page";
import PropertyList from "./propertyList";
import "./property.css";

function Property() {
  const { roomID } = useParams();
  const [areaName, setAreaName] = useState([]);
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    if (roomID) {
      db.collection("propertyListing")
        .doc(roomID)
        .onSnapshot((snapshot) => setAreaName(snapshot.data()));
    }

    db.collection("propertyListing")
      .doc(roomID)
      .collection("list")
      .onSnapshot((snapshot) =>
        setPropertyList(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomID]);

  console.log(areaName);
  console.log(propertyList);

  return (
    <div className="home-property">
      <div className="sidebarArea">
        <Home />
      </div>
      <h2>List of property in {areaName?.name} area.</h2>

      <div className="property-list">
        {propertyList.map(
          ({ address, message, images, user, contact, size, price }) => (
            <PropertyList
              address={address}
              message={message}
              images={images}
              user={user}
              contact={contact}
              size={size}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Property;
