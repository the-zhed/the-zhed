import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Pack from './components/Pack';
import Zhed from './components/Zhed';
import store from './store';

const Root = () => (
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
        <Route path="/pack/" component={Pack}/>
        <Route path="/zhed/:level" component={Zhed}/>
      </div>
    </Router>
  </Provider>
);

export default Root;
