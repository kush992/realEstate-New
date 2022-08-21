import React, { useEffect, useState } from "react";
import { baseUrl, isMobile } from "../utils/utility";

import Home from "../home-page/home-page";
import "./mixedProperty.css";

const MixedProperty = () => {
  const [dataFetched, setDataFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch(`${baseUrl}/properties/list?locationExternalIDs=5002`, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "f72edcd758mshad78acf4d99f0dfp198283jsn2951caed78fe",
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setDataFetched(json.hits);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataFetched);

  return (
    <div className="property-main">
      {!isMobile() && (
        <div className="side-bar">
          <Home />
        </div>
      )}
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={`${isMobile() ? "home-details-mobile-main" : "home-details-main"}`}
          >
            {dataFetched.map((data) => {
              const string = `${data.keywords}`;
              const splitString = string.split();
              return (
                <div
                  key={data.id}
                  className={`${isMobile() ? "home-details-mobile-card" : "home-details-card"}`}
                >
                  <div className="card-img">
                    <img src={`${data.coverPhoto.url}`} alt="user-home" />
                  </div>
                  <div className="card-details">
                    <p>Name: {data.contactName}</p>
                    <p>Furnished: {data.furnishingStatus}</p>
                    <p>Verified User: {data.isVerified}</p>
                    <p>Price: {data.price}PLN</p>
                    <p>Purpose: {data.purpose}</p>
                    <p>Rent: {data.rentFrequency}</p>
                    <p>Contact Information: {data.phoneNumber.mobile}</p>
                    <div className="card-footer">
                      <p>{splitString}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MixedProperty;
