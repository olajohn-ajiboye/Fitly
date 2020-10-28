import React, { useContext, useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { AppBar } from "./components";
import { LandingPage, LoginPage, MainLayout, DataEntry } from "./views";

import { AppContext } from "./app/context";

const history = createBrowserHistory();

function App() {
  const currentUser = useContext(AppContext)?.currentUser;

  const [active, setActive] = useState<boolean>(false);

  const onMobileMenuClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar onMobileMenuClick={onMobileMenuClick} />
      {!currentUser?.displayName ? (
        <LoginPage />
      ) : (
        <Router history={history}>
          <Switch>
            <Route path="/start">
              <LandingPage />
            </Route>
            <Route path="/data">
              <DataEntry
                onMobileMenuClick={onMobileMenuClick}
                active={active}
              />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/page">
              <MainLayout
                onMobileMenuClick={onMobileMenuClick}
                active={active}
                user={currentUser}
              />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
