import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Test, NoMatch, Nav } from './pages';

import './app.scss';

const App = () => {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;