import React, { useEffect, useState } from "react";
import PropertyList from "../../common/propertyCard/propertyList";
import { baseUrl, isMobile } from "../../common/utility";

import Home from "../home/home-page";
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
          <div
            className={`${
              isMobile() ? "home-details-mobile-main" : "home-details-main"
            }`}
          >
            {dataFetched.map((data) => {
              const string = `${data.keywords}`;
              const splitString = string.split();
              return (
                <PropertyList
                  address={data?.address}
                  message={splitString}
                  user={data.contactName}
                  images={`${data.coverPhoto.url}`}
                  contact={data.phoneNumber.mobile}
                  size={data?.size}
                  price={data.price}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MixedProperty;
