import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Home from './components/Home';
import TabComponent from './components/tab-panel.js';
import ArtistMain from './components/artists/ArtistMain';

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
            <li><Link to="/">React Apps</Link></li>
            <li><Link to="/tabcomponent">Tab Panel</Link></li>
            <li><a href="https://bitbucket.org/" target="_blank">Bitbucket</a></li>
            <li><a href="https://tree.taiga.io" target="_blank">Tagia</a></li>
            <li><a href="https://id.heroku.com/login" target="_blank">Heroku</a></li>
        </ul>
        </div>
        <Route exact path='/' component={TabComponent} />
        <Redirect from="*" to="/" />
        <Route path='/tabcomponent' component={ArtistMain} />
      </div>
    </Router>
  );
};

export default Routes;
