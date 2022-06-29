import React from "react";
import {
  BrowserRouter as Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Header/header";
import Login from "./authentication/authentication";
import Blog from "./blog-page/blog";
import Contact from "./contact-us/contact-us";
import Property from "./home-page/property";
import Selling from "./sell-page/sell-page";
import Main from "./landing-page/landing-page";
import { useStateValue } from "./redux/stateProvider";
import MixedProperty from "./propertyFromApi/mixedProperty";
import { Redirect } from "react-router-dom";

const App = () => {
  // const [{ user }] = useStateValue();

  return (
    <Route>
      <Navbar />
      <Switch>
        {/* App base url */}
        <Redirect exact from="/" to="/home-recent" />
        
        <Route excat path="/main">
          <Main />
        </Route>
        <Route excat path="/contact">
          <Contact />
        </Route>
        <Route excat path="/blog">
          <Blog />
        </Route>
        <Route excat path="/home/:roomID">
          <Property />
        </Route>

        <Route excat path="/home-recent">
          <MixedProperty />
        </Route>

        {/* <Route path="/sell">{!user ? <Login /> : <Selling />}</Route> */}
      </Switch>
    </Route>
  );
};

export default App;
