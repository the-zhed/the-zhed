import { connect } from 'react-redux';
import ZhedBoard from '../components/ZhedBoard';
import {
  fetchZhedIfNeeded,
  selectZhed,
  selectZhedButton,
  selectZhedDot,
  restartZhed,
  undoZhed,
} from '../actions';

const mapStateToProps = state => {
  return {
    packZhed: state.packZhed,
    selectedZhed: state.selectedZhed,
    stagingZhed: state.stagingZhed,
  };
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
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ZhedBoard);

export default App;
