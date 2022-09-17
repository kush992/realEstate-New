import React from "react";
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login/authentication";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact-us";
import Property from "./components/home/property";
import Selling from "./components/selling/sell-page";
import Main from "./components/landingPage/landingPage";
import MixedProperty from "./components/propertyFromApi/mixedProperty";
import RecentProperty from "./components/home/RecentProperty"

import { APP_URL, userToken } from "./common/utility";
import Layout from "./components/layout/layout";

import './app.css'
import Home from "./components/home/home-page";

const App = () => {
  return (
    <Route>
      <Switch>
        {/* App base url */}
        <Redirect exact from={APP_URL.root} to={APP_URL.main} />

        <Route exact path={APP_URL.main}>
          <Layout>
            <Main />
          </Layout>
        </Route>

        <Route exact path={APP_URL.contact}>
          <Layout>
            <Contact />
          </Layout>
        </Route>

        <Route exact path={APP_URL.blog}>
          <Layout>
            <Blog />
          </Layout>
        </Route>

        <Route exact path={`${APP_URL.home}/:roomID`}>
          <Layout>
            <Home />
            <Property />
          </Layout>
        </Route>

        <Route exact path={APP_URL.mixedProperty}>
          <Layout>
            <MixedProperty />
          </Layout>
        </Route>

        <Route exact path={APP_URL.homeRecent}>
          <Layout>
            <RecentProperty />
          </Layout>
        </Route>

        <Route exact path={APP_URL.login}>
          <Layout>
            <Login />
          </Layout>
        </Route>

        <Route path={APP_URL.sell}>
          {!userToken ? (
            <Layout>
              <Login />
            </Layout>
          ) : (
            <Layout>
              <Selling />
            </Layout>
          )}
        </Route>
      </Switch>
    </Route>
  );
};

export default App;
