import React from "react";
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import LikeButton from "./LikeButton";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";

function App() {
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
        height={170}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">François</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={255} b={255} />
      <BoxColor r={250} g={250} b={250} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={255} g={130} b={255} />
      <BoxColor r={128} g={128} b={128} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={101} b={0} />
      <BoxColor r={10} g={20} b={30} />
      <BoxColor r={0} g={0} b={0} />
      <h1>CreditCard</h1>
      <div className="row-container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <h1>Like Button</h1>
      <LikeButton /> <LikeButton />
    </div>
  );
}

export default App;
