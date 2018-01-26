import React from 'react';
import { connect } from 'react-redux';
import {
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions';

const mapStateToProps = state => {
  return {
    current: state.current,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClicker: coordinate => {
      console.log('onClicker');
      dispatch(selectZhedButton(coordinate));
    }
  }
}

let App = ({ current, onClicker }) => {

  return (
    <div>
      <h1>container App</h1>
      <button onClick={onClicker}>Click me!</button>
    </div>
  )
};
App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
