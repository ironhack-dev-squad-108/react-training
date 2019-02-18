import React, { Component } from 'react';
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
      </div>
    );
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
      <h2>{this.props.min + Math.floor(Math.random()*this.props.max)}</h2>
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
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


export default App;
