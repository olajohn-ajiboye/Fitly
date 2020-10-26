import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppBar } from "./components";
import { LandingPage, LoginPage, MainLayout, DataEntry } from "./views";
import { useLocalStorage } from "./app/hooks/useLocalStorage";
import { CurrentUser } from "./services/firestore";

const DEFAULT_USER: CurrentUser = {
  displayName: "",
  photoURL: "",
  email: "",
};
function App() {
  const [active, setActive] = useState<boolean>(false);
  const [user, setUser] = useState<CurrentUser>(DEFAULT_USER);
  const { getItem } = useLocalStorage<CurrentUser>("user");

  const onMobileMenuClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const user = getItem();
    setUser(user ?? DEFAULT_USER);
  }, []);
  return (
    <>
      {/* { user ?  <LoginPage /> :()} */}
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
            <MainLayout
              onMobileMenuClick={onMobileMenuClick}
              active={active}
              user={user}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
