import React from 'react'
import Rating from './Rating'
import "./DriverCard.css"

export default function DriverCard (props) {
  return (
    <div className="DriverCard">
      <img src={props.img} alt=""/>
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <div>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  )
}

/*
 <DriverCard 
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
*/