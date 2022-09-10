import React from "react";
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
        <a href={APP_URL.main} className="nav__link">
          <Icon
            icon="bhalodi-real-estate"
            height={`${isMobile() ? 30 : 50}`}
            color="orange"
          />
        </a>
      </div>
      <div className="nav__right">
        <ul className="nav__list">
          <li>
            <a href={APP_URL.homeRecent} className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href={APP_URL.sell} className="nav__link">
              Sell
            </a>
          </li>
          <li>
            <a href={APP_URL.blog} className="nav__link">
              Blog
            </a>
          </li>
          <li>
            <a href={APP_URL.contact} className="nav__link">
              Contact
            </a>
          </li>
          {!userToken ? (
            <li>
              <a href={APP_URL.login} className="nav__link">
                Login
              </a>
            </li>
          ) : (
            <li>
              <span onClick={handleSignOut} className="logout__button" title="LogOut...?">
                <img src={userData.photoURL} height={50} width={50} alt="user-profile-img" />
              </span>
            </li>
          )}
        </ul>
        {/* TODO: add mode toggling functionality */}
        <div className="theme__switch">
          <Switch />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
