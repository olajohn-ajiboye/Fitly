import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// components
import { AppBar } from './components';
import { LandingPage, LoginPage, MainLayout, DataEntry } from './views';

// methods
import { getCurrentUserAsync, currentUser } from './features/auth';

function App() {
  const [active, setActive] = useState<boolean>(false);
  const user = useSelector(currentUser);
  const dispatch = useDispatch();

  const onMobileMenuClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, [dispatch]);

  return (
    <>
      {!user?.displayName ? (
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
