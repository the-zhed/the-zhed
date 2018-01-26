import React from 'react';
import Zhed from './Zhed';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    const bgData = props.map.map((rows) => {
      return rows.map((col) => {
        return getRandomInt(5);
      });
    })

    this.state = {
      defaultData: props.map,
      mapData: props.map,
      bgData,
    };

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
      <div className="Game">
        <Zhed mapData={this.state.mapData} bgData={this.state.bgData} />
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
