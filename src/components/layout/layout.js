import React from "react";
import Navbar from "../header/header";
import "./layout.css";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="layout__child">{props.children}</div>
    </>
  );
};

export default Layout;
