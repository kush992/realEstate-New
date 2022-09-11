import React, { useState, useEffect } from "react";
import db from "../../firebase";
import PropertyList from "../../common/propertyCard/propertyList";
import "./RecentProperty.css";

function RecentProperty() {
  const [recentProperty, setRecentProperty] = useState([]);

  useEffect(() => {
    db.collection("recentProperty").onSnapshot((snapshot) =>
      setRecentProperty(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="RecentProperty">
      <h2>List of Recently Added Properties.</h2>

      <div className="recent-property-list">
        {recentProperty.map(
          ({ address, images, message, user, contact, size, price }) => (
            <PropertyList
              address={address}
              message={message}
              user={user}
              images={images}
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

export default RecentProperty;
