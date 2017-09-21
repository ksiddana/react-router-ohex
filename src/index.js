import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './router';
import { Router, Route, IndexRoute, hashHistory, Link, IndexLink } from 'react-router';
import { HashRouter } from 'react-router-dom';
import '../style/style.css';
import Database from './components/food_list.js';
import Maps from './components/maps.js';
// import Header from './components/Header.js';

const App = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
  );

  return(
      <Provider store={store}>
        <Routes />
      </Provider>
  );
};

var Navigation = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="title">OH Exchange</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">OHEX</IndexLink></li>
          <li><Link to="/database" activeClassName="active">Database</Link></li>
          <li><Link to="/hello" activeClassName="active">Google Maps</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
