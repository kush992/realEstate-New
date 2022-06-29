import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import {useStateValue} from '../redux/stateProvider';
import Icon from "../Icons/icons";

function Navbar() {
  // const [{user}] = useStateValue();

  return (
    <div className="nav__main">
      <div className="nav__left">
        <Link to="/main">
          <span>
            <Icon icon="bhalodi-real-estate" size={30} color="orange" />
          </span>
          BRE
        </Link>
      </div>

      <div className="nav__right">
        <Link to="/home-recent" className="nav__rightLink">
          <Icon icon="search_home" size={25} color="orange" />
        </Link>

        <Link to="/sell" className="nav__rightLink">
          <Icon icon="home" size={25} color="orange" />
        </Link>

        <Link to="/blog" className="nav__rightLink">
          <Icon icon="blog" size={25} color="orange" />
        </Link>

        <Link to="/contact" className="nav__rightLink">
          <Icon icon="contact" size={25} color="orange" />
        </Link>

        <Link className="nav__rightLink">
          <Icon icon="avatar" size={25} color="orange" />
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
