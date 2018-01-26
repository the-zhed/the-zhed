import { connect } from 'react-redux';
import ZhedBoard from '../components/ZhedBoard';
import {
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions';

const mapStateToProps = state => {
  return {
    map: state.current,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectZhedButton: coordinate => {
      dispatch(selectZhedButton(coordinate));
    },
    onSelectZhedDot: coordinate => {
      dispatch(selectZhedDot(coordinate));
    },
    onRestartZhed: () => {
      dispatch(restartZhed());
    },
    onUndoZhed: () => {
      dispatch(undoZhed());
    },
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ZhedBoard);

export default App;
