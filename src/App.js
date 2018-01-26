import React, { Component } from 'react';
import ZhedBoard from './components/ZhedBoard';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Level from './components/Level';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Zhed</h1>
        </header>
        <div className="container">
          <ZhedBoard />
        </div>
      </div>
    );
  }
}

export default App;
