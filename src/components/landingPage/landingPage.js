import React from "react";
import Icon from "../../common/icons/icons";
import { APP_URL } from "../../common/utility";
import "./landingPage.css";

function Main() {
  return (
    <div className="home">
      <Icon icon="bhalodi-real-estate" size={200} color="orange" />
      <h1>Kush Bhalodi Real Estate</h1>
      <div className="home__redirection">
        <h2>Want to buy or sell...?</h2>
        <a href={APP_URL.homeRecent} className="home__button">
          Buy home
        </a>
        <a href={APP_URL.sell} className="home__button">
          Sell home
        </a>
      </div>
    </div>
  );
}

export default Main;
