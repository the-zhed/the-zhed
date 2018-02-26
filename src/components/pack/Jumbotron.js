import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Jumbotron extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      packList: [1, 2, 3, 4, 5]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const pack = parseInt(e.target.dataset.pack, 10)
    this.props.selectPack(pack)
  }
  render() {
    const { currentPack } = this.props
    return (
      <div className="jumbotron jumbotron-fluid pb-0">
        <div className="container">
          <h1 className="display-4">LEVEL Board!</h1>
          <p className="lead">Select Pack</p>
          <hr className="my-4" />
            <ul className="nav nav-tabs px-a">
            {this.state.packList.map((el, idx) => (
              <li className="nav-item" key={idx}>
                <a href="#"
                  className={classnames('nav-link', { 'active': el === currentPack })}
                  data-pack={el}
                  onClick={this.handleClick}
                >
                  Pack {el}
                </a>
              </li>
            ))}
            </ul>
        </div>
      </div>
    )
  }
}

Jumbotron.propTypes = {
  selectPack: PropTypes.func,
}

export default Jumbotron
