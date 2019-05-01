import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nbOfLikes: 0
    }

    // Bind the method `incrementLikes`
    this.incrementLikes = this.incrementLikes.bind(this)
  }
  incrementLikes() {
    // // The following is forbidden, we should never change the state directly
    // this.state.nbOfLikes++
    
    this.setState({
      nbOfLikes: this.state.nbOfLikes + 1
    })
  }
  render() {
    let colors = ['purple','blue','green','yellow','orange','red']
    // let index = Math.floor(Math.random() * colors.length)
    let index = this.state.nbOfLikes % colors.length
    let buttonStyle = {
      color: 'white',
      backgroundColor: colors[index]
    }
    return (
      <button className="LikeButton" style={buttonStyle} onClick={this.incrementLikes}>
        {this.state.nbOfLikes} {this.state.nbOfLikes===1 ? "like" : "likes"}
      </button>
    )
  }
}

export default LikeButton