import React, { useEffect, useState } from "react";
import db from "../firebase";
import { Link } from "react-router-dom";
import SidebarArea from "./sidebarArea";
import "./home-page.css";

function Home() {
  const [propertyListing, setPropertyListing] = useState([]);

  useEffect(() => {
    db.collection("propertyListing")
      .orderBy("name")
      .onSnapshot((snapshot) =>
        setPropertyListing(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
          }))
        )
      );
  }, []);

  return (
    <div className="sidebar-info">
      <h4>List of Areas</h4>
      <p>
        <Link className="goto-recent-property" to="/home-recent">
          Recent Listing
        </Link>
      </p>
      <div className="sidebar-list">
        {propertyListing.map((property) => (
          <SidebarArea
            className="home-btn"
            title={property.name}
            id={property.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
