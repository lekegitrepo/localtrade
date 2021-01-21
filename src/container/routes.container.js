import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration';

const PageRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/registration">
        <Registration />
      </Route>
    </Switch>
  </Router>
);

export default PageRoutes;
