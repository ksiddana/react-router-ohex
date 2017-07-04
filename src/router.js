import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import FoodChart from './components/FoodChart.js';
import ArtistMain from './components/artists/ArtistMain';
import Countdown from './components/countdown/countdown'
import ReminderPro from './components/reminder-pro/reminder-pro';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistCreate')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistDetail')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistEdit')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router>
      <div>
        <div className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/foodchart">Food Chart</Link></li>
            <li><Link to="/countdown">Countdown</Link></li>
            <li><Link to="/reminderpro">ReminderPro</Link></li>
            <li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
            <li><a href="https://tree.taiga.io" target="_blank">Tagia</a></li>
            <li><a href="https://id.heroku.com/login" target="_blank">Heroku</a></li>
        </ul>
        </div>

        <hr/>
        <Route exact path='/' component={Home} />
        <Route path='/foodchart' component={FoodChart} />
        <Route path='/countdown' component={Countdown} />
        <Route path='/reminderpro' component= {ReminderPro} />
      </div>
    </Router>
  );
};

export default Routes;
