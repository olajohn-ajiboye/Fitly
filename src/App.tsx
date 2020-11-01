import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import { AppBar } from './components';
import { LandingPage, LoginPage, MainLayout, DataEntry } from './views';

// methods
import { isAuth, getCurrentUserAsync } from './features/auth';
import {} from 'react-redux';

function App() {
  const [active, setActive] = useState<boolean>(false);
  const user = useSelector(isAuth);
  const dispatch = useDispatch();

  const onMobileMenuClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <LoginPage />
      ) : (
        <Router>
          <AppBar onMobileMenuClick={onMobileMenuClick} />
          <Switch>
            <Route exact path='/'>
              <MainLayout
                onMobileMenuClick={onMobileMenuClick}
                active={active}
              />
            </Route>
            <Route path='/start'>
              <LandingPage />
            </Route>
            <Route path='/data'>
              <DataEntry
                onMobileMenuClick={onMobileMenuClick}
                active={active}
              />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
