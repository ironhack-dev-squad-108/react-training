import React, { Component } from 'react'
import './Rating.css'

let style = {
  fontSize: 50,
}

export default class Rating extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      isHovered: false
    }
    this.toggleIsHovered = this.toggleIsHovered.bind(this)
  }
  toggleIsHovered() {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }
  render() {
    let nbOfStars = Math.round(this.props.children)

    // // Solution 1
    // if (nbOfStars === 0) return <div style={style}>☆☆☆☆☆</div>
    // if (nbOfStars === 1) return <div style={style}>★☆☆☆☆</div>
    // if (nbOfStars === 2) return <div style={style}>★★☆☆☆</div>
    // if (nbOfStars === 3) return <div style={style}>★★★☆☆</div>
    // if (nbOfStars === 4) return <div style={style}>★★★★☆</div>
    // return <div style={style}>★★★★★</div>

    // // Solution 2
    // let content = ''
    // for (let i = 0; i < 5; i++) {
    //   if (i < nbOfStars) content += "★"
    //   else content += "☆"
    // }
    // return <div style={style}>{content}</div>

    // Solution 3
    return (
      <div 
        style={style} 
        className="Rating"
        onMouseEnter={this.toggleIsHovered}
        onMouseLeave={this.toggleIsHovered}
      >
        {"★".repeat(nbOfStars)}
        {"☆".repeat(5 - nbOfStars)}
        {/* If the element is hovered, display a box with the rating */}
        {this.state.isHovered && <div className="pop-up">{Number(this.props.children).toFixed(2)}</div>}
      </div>
    )
  }
}

