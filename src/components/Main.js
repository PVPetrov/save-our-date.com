import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Rsvp from './Rsvp';
import Info from './Info';

import './Main.css';

const Main = () => (
  <main>
    <div className="main-content-page">
      <div className="wrapper ">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/rsvp" component={Rsvp} />
          <Route path="/info" component={Info} />
        </Switch>
      </div>
    </div>
  </main>
);

export default Main;
