import React, { Component } from 'react';
import {Greetings, Random, BoxColor, CreditCard, Rating, Driver, ClickablePicture, Dice, Carousel, FaceBook} from "./Components"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Greetings</h2>
          <Greetings lang="de">Ludwig</Greetings>
          <br/>
          <Greetings lang="fr">François</Greetings>
        </div>
        <div>
          <h2>Random</h2>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
        </div>
        <div>
          <h2>BoxColor</h2>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
          <h2>CreditCards</h2>
        <div className="cards">
          <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} 
          expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" 
          bgColor="#eecc55" color="white" />
          <CreditCard type="Master" number="012345678293847" expirationMonth={9} 
          expirationYear={2021} bank="N26" owner="Maxence Bouret" 
          bgColor="lightgrey" color="white" />
        </div>
        <h2>Rating</h2>
        <div>
          <Rating>1</Rating>
          <Rating>2</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
        <h2>Driver Card</h2>
          <Driver name="Jon Doe" img="../img/driver.png" rating="2" />
        <h2>Clickable Picture</h2>
          <ClickablePicture img="/img/persons/maxence.png" imgClicked="/img/persons/maxence-glasses.png" />
        <h2>Dice</h2>
        <Dice />
        <h2>Carousel</h2>
        <Carousel
  imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />
        <h2>FaceBook</h2>      
        <FaceBook />
      </div>
    );
  }
}

export default App;
