import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
