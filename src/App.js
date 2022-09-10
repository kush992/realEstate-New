import React from "react";
import {
  BrowserRouter as Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/header/header";
import Login from "./components/login/authentication";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact-us";
import Property from "./components/home/property";
import Selling from "./components/selling/sell-page";
import Main from "./components/landingPage/landing-page";
import MixedProperty from "./components/propertyFromApi/mixedProperty";

import { userToken } from "./common/utility";

const App = () => {

  return (
    <Route>
      <Navbar />
      <Switch>
        {/* App base url */}
        {/* <Redirect exact from="/" to="/home-recent" />

        <Route exact path="/main">
          <Main />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route exact path="/home/:roomID">
          <Property />
        </Route>

        <Route exact path="/home-recent">
          <MixedProperty />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="/sell">{!userToken ? <Login /> : <Selling />}</Route> */}
      </Switch>
    </Route>
  );
};

export default App;
