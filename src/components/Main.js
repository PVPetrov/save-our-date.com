import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Rsvp from './Rsvp';
import Info from './Info';

import './Main.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/rsvp" component={Rsvp} />
      <Route path="/info" component={Info} />
    </Switch>
  </main>
);

export default Main;
