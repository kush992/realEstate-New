import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import * as asyncComponent from "./asyncComponents";

import { APP_URL, userToken } from "./common/utility";
import Layout from "./components/layout/layout";

import "./app.css";

const App = () => {

  const location = useLocation();

  return (
    <>
      <Suspense fallback={<div>loading....</div>}>
        <Layout>
          <Switch>
            {location.pathname === APP_URL.sell && !userToken && <Redirect exact to={APP_URL.login}/>}

            <Redirect exact from={APP_URL.root} to={APP_URL.main} />

            <Route path={APP_URL.blog} component={asyncComponent.Blog} />
            <Route path={APP_URL.contact} component={asyncComponent.Contact} />
            <Route path={APP_URL.main} component={asyncComponent.Main} />
            <Route path={APP_URL.mixedProperty} component={asyncComponent.MixedProperty} />
            <Route path={APP_URL.homeRecent} component={asyncComponent.RecentProperty} />
            <Route path={APP_URL.login} component={asyncComponent.Login} />
            <Route path={APP_URL.sell} component={asyncComponent.Selling} />

            {/* <Route path={`${APP_URL.home}/:roomID`} component={asyncComponent.Property} /> */}

            <Route path={APP_URL.pageNotFound} component={asyncComponent.PageNotFound} />
            <Redirect from={APP_URL.notFound} to={APP_URL.pageNotFound}/>
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
