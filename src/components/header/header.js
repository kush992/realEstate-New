import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "@material-ui/core";
import Icon from "../../common/icons/icons";
import { APP_URL, isMobile, userData, userToken } from "../../common/utility";
import "./header.css";

const Navbar = () => {
  const handleSignOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    window.location.reload();
  };
  
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to={APP_URL.main} className="nav__link">
          <Icon
            icon="bhalodi-real-estate"
            height={`${isMobile() ? 30 : 50}`}
            color="orange"
          />
        </Link>
      </div>
      <div className="nav__right">
        <ul className="nav__list">
          <li>
            <Link to={APP_URL.homeRecent} className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to={APP_URL.sell} className="nav__link">
              Sell
            </Link>
          </li>
          <li>
            <Link to={APP_URL.blog} className="nav__link">
              Blog
            </Link>
          </li>
          <li>
            <Link to={APP_URL.contact} className="nav__link">
              Contact
            </Link>
          </li>
          {!userToken ? (
            <li>
              <Link to={APP_URL.login} className="nav__link">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <span onClick={handleSignOut} className="logout__button">
                <img src={userData.photoURL} height={50} width={50} alt="user-profile-img" />
              </span>
            </li>
          )}
        </ul>
        <div className="theme__switch">
          <Switch />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
