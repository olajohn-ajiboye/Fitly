import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppBar } from "./components";
import { LandingPage, LoginPage, MainLayout, DataEntry } from "./views";

function App() {
  const [active, setActive] = useState<boolean>(false);

  const onMobileMenuClick = () => {
    setActive(!active);
  };

  return (
    <>
      <AppBar onMobileMenuClick={onMobileMenuClick} />
      <Router>
        <Switch>
          <Route path="/start">
            <LandingPage />
          </Route>
          <Route path="/data">
            <DataEntry onMobileMenuClick={onMobileMenuClick} active={active} />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/page">
            <MainLayout onMobileMenuClick={onMobileMenuClick} active={active} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
