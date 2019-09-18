import React from "react";
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import LikeButton from "./LikeButton";

function App(props) {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1993-05-11")}
        picture="https://randomuser.me/api/portraits/women/8.jpg"
      />

      <h1>Greetings</h1>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Like Button</h1>
      <LikeButton />
      <LikeButton />
    </div>
  );
}

export default App;
