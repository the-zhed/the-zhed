import React, { Component } from 'react';
import ZhedBoard from './components/ZhedBoard';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import level10 from './schema/level10';
import { randomMap, nullMap } from './util';

level10.backgroundMap = randomMap(level10.map);
level10.indicatorMap = nullMap(level10.map);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Zhed</h1>
        </header>
        <div className="container">
          <ZhedBoard {...level10} />
        </div>
      </div>
    );
  }
}

export default App;
