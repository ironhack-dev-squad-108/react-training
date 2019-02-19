import React, { Component } from 'react';
import profiles from './data/berlin.json';

export class Greetings extends Component {
    render() {
      let greeting = {
        "de": "Hallo",
        "en": "Hello",
        "fr": "Bonjour",
        "es": "Hola"
      }
  
      return (
        <div className='greetings'>{greeting[this.props.lang]}, {this.props.children}!</div>
      )
    }
  }
  
  export class Random extends Component {
    render() {
      let random = Math.floor(Math.random()*(this.props.max - this.props.min)+this.props.min)
      return (
        <div className="random">A random number between {this.props.min} and {this.props.max} is: {random}</div>
      )
    }
  }
  
  export class BoxColor extends Component {
    render(){
      
      let color = this.props.r+", "+this.props.g+", "+this.props.b
      
      function rgbToHex (rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      }
  
      let hexColor = rgbToHex(this.props.r)+""+rgbToHex(this.props.g)+""+rgbToHex(this.props.b)
  
      return (
        <div className="boxcolor" style={{backgroundColor: `rgb(${color})`}}>#{hexColor}</div>
      )
    }
  }
  
  export class CreditCard extends Component {
    render() {
      let img = "../img/visa.png"
      if(this.props.type === "Master") img = "../img/master.png"
  
      return (<div className="creditCard" style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
                <img className="cardType" alt="type" src={img} />
                <p className='cardNumber'>∙∙∙∙  ∙∙∙∙  ∙∙∙∙ {this.props.number.toString().substr(-4)}</p>
                <p className="expDate">Expires {this.props.expirationMonth}/{this.props.expirationYear.toString().substr(-2)} {this.props.bank}</p>
                <p className="name">{this.props.owner}</p>
        </div>
      )
     }
  }
  
  export class Rating extends Component {
    render() {
      let stars = this.props.children
      let rating = []
      for (let i = 0; i<stars; i++) {
        rating.push(<img key={i} className="stars" src='../img/filledStar.png' alt="filled"/>) 
      }
      for (let i = 0; i<(5-stars); i++){
        rating.push(<img key={i+stars} className="stars" src='../img/emptyStar.png' alt="filled"/>) 
      }
      return (<div className="rating">
        {rating}
      </div>)
    }
  }
  
  export class Driver extends Component {
    render() {
      return (<div className="driverCard">
      <div className="driverInfo"> 
        <p>Your driver: <br /> <br /> <br /> {this.props.name}</p>
        <img className="driverPic" src={this.props.img} alt="driver"/>
      </div>
      
      <Rating>{this.props.rating}</ Rating>
      </div>)
    }
  }
  
  export class ClickablePicture extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isClicked: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }))
    }
    render() {
      return <button onClick={this.handleClick}> 
        <img className="clickablePicture" src={this.state.isClicked ? this.props.img : this.props.imgClicked} alt="maxence" />
      </button>
    }
  }
  
  export class Dice extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 6
      }
      this.handleClick = this.handleClick.bind(this);
      this.dices = ["./img/dice0.png", "./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"]
    }
    handleClick() {
      if(this.state.value) {
        this.setState(()=>({
          value: 0
        }))
        setTimeout(
          function() {
            this.setState(()=>({
              value: Math.floor(Math.random()*5+1)
            }))
          }.bind(this), 1000
        )
      }
    }
  
    render() {
      return (
        <button onClick={this.handleClick}> 
          <img className="dice" src={this.dices[this.state.value]} alt="dice"/>
        </button>
      )
    }
  }
  
  export class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        position: 0
      };
      this.handleClickLeft = this.handleClickLeft.bind(this);
      this.handleClickRight = this.handleClickRight.bind(this);
      this.img = this.props.imgs;
    }
    handleClickLeft() {
      this.setState(prevState => ({
        position: (prevState.position > 0) ?
          prevState.position - 1 : this.img.length-1
      }))
    }
    handleClickRight() {
      this.setState(prevState => ({
        position: (prevState.position < this.img.length-1) ?
          prevState.position + 1 : 0
      }))
    }
    render() {
      return <div className="carousel"> 
        <button className="carouselBtn" onClick={this.handleClickLeft}>←</ button> 
          <img className="carouselImg" src={this.img[this.state.position]} alt="people" />
        <button className="carouselBtn" onClick={this.handleClickRight}>→</ button>  
      </div>
      
    }
  }

  export class FaceBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "ALL"
          };
        this.showList = this.showList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.countries = [...new Set(profiles.map(person => person.country))].sort()
    }
    showList(){
          let list =[]
          for (let i = 0; i < profiles.length; i++) {
              if(this.state.country === "ALL" || profiles[i].country === this.state.country) {
                list.push(
                    <div key={i} className="fbCard">
                    <img className="fbImg" alt="bla" src={profiles[i].img}/>
                    <div className="fbInfo">
                        <p><strong>First name: </strong>{profiles[i].firstName}</p>
                        <p><strong>Last name: </strong>{profiles[i].lastName}</p>
                        <p><strong>Country: </strong>{profiles[i].country}</p>
                        <p><strong>Type: </strong>{profiles[i].isStudent ? "Student" : "Teacher"}</p>
                    </div>
                    </div>)
              }
          }
          return list;
    }

    handleClick(country){
        this.setState(() => ({
            country: country
          }))
    }
    render() {
        let buttons = [<button className="btn" onClick={()=>this.handleClick("ALL")} key="all">ALL</button>]
        for (let i = 0; i< this.countries.length; i++){
            buttons.push(
                <button className="btn" onClick={()=>this.handleClick(this.countries[i])} key={i}>{this.countries[i]}</button>
            )
          }
        return (
            <div className="fbList">
                <div className="fbButtons">{buttons}</div>
                {this.showList()}
            </div>
            )
        }
    }