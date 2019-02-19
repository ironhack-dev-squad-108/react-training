import React, { Component } from 'react';
import Dice from './components/Dice'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greetings />
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <br/>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <br/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <Rating>3</Rating>
        <Infobox name="Maxence Bouret" img="https://miro.medium.com/max/2400/1*4vIkoT2ii8unib8Ezb-Ukw.jpeg"/>
        <ClickablePicture img="https://github.com/ironhack-dev-squad-108/react-training/raw/master/solution-code/public/img/persons/maxence.png"
           imgClicked="https://github.com/ironhack-dev-squad-108/react-training/raw/master/solution-code/public/img/persons/maxence-glasses.png" />
        <Dice img=""/>
        
      </div>
    );
  }
}

class ClickablePicture extends Component {
  constructor (props) {
    super(props);
    this.state = {currentPic: props.img};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      currentPic: prevState.currentPic === this.props.img ? this.props.imgClicked : this.props.img
    }))
  }

  render() {

    return (
        <div className="box">
          <img onClick={this.handleClick} src={this.state.currentPic} width="400px" alt=""/>
        </div>
      )
  }
}

class Infobox extends Component {
  render() {

    return (
        <div className="box">
          <p>Your Driver</p> 
          <strong>{this.props.name}</strong><br/>
          <img src={this.props.img} width="100px" alt=""/>
          <div><Rating>5</Rating></div> 
        </div>
      )
  }
}

class Rating extends Component {
  render() {
    let num = this.props.children;
    let resDiv = [];
    for (let i=0; i < num; i++) {
      resDiv.push (<span><i className="fas fa-star"></i></span>);
    }
    for (let i=0; i < (5-num); i++) {
      resDiv.push (<span><i className="far fa-star"></i></span>);
    };
    return <div>{resDiv}</div>
  }
}



class BoxColor extends Component {
  render() {
    let hex = rgbToHex(this.props.r, this.props.g, this.props.b)
    let rgb = [this.props.r, this.props.g, this.props.b]
    var divStyle = {
      backgroundColor: `rgb(${rgb})`,
      width: '100px',
      height: '100px',
      display: 'inline-block'
    };
    return (
      <div style={divStyle}>{hex}</div>
    )
  }
}

class Random extends Component {
  render() {
    return (
      <h2>{this.props.min + Math.floor(Math.random()* this.props.max)}</h2>
    )
  }
}

class Greetings extends Component {
  render() {
    let greeting;
    switch (this.props.lang) {
      case "de": greeting = "Hallo"; break;
      case "es": greeting = "Hola"; break;
      case "fr": greeting = "Bonjour"; break;
      default: greeting = "Hello"; break;
    }
  
    return (
      <h2>{greeting} {this.props.children}</h2>
    )
  }
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


export default App;
