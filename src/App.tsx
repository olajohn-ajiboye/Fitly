import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalStorage } from "./app/hooks/useLocalStorage";

import { AppBar } from "./components";
import { LandingPage, LoginPage, MainLayout, DataEntry } from "./views";
import { CurrentUser } from "./services/firestore";

function App() {
  const [active, setActive] = useState<boolean>(false);

  const { getItem } = useLocalStorage<CurrentUser>("user");
  const user = getItem();

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
