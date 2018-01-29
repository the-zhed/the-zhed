import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Pack from './Pack';
import About from './About';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/pack">Pack</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/pack" component={Pack}/>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
