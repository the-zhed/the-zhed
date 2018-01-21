import React from 'react';
import Zhed from './game/Zhed';

const map = [
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  1 , "x",  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ],
  [ 0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ]
];

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.restart = this.restart.bind(this);
    this.undo = this.undo.bind(this);
  }

  restart() {
    console.log('restart');
  }

  undo() {
    console.log('undo');
  }

  render() {
    return (
      <div>
        <Zhed map={map} />
        <div className="my-5">
          <button
            className="btn btn-secondary"
            onClick={this.restart}
          >
            Restart
          </button>
          <button
            className="btn btn-secondary"
            onClick={this.undo}
            >
            Undo
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
