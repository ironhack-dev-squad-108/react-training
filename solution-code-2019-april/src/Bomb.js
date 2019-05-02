import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.initialTime
    }
    let intervalId = setInterval(() => {
      this.setState({
        time: this.state.time-1
      }, () => {
        // Callback executed when the setState is over
        if (this.state.time <= 0)
          clearInterval(intervalId)
      })
    }, 1000)
  }
  render() {
    if (this.state.time > 0) {
      let style = {
        backgroundImage: `url(/img/bomb/bomb.gif)`,
        backgroundSize: 'cover',
        height: 100,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        // border: '1px solid black',
      }
      return (
        <div className="Bomb" style={style}>
          {this.state.time}
        </div>
      )
    }
    else {
      let style = {
        backgroundImage: `url(/img/bomb/explosion.png)`,
        backgroundSize: 'cover',
        height: 100,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        // border: '1px solid black',
      }
      return (
        <div className="Bomb" style={style}>
          Boom!
        </div>
      )
    }
  }
}
