import React from "react";

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="" className="IdCard__image"/>
      <div className="IdCard__content">
        <strong>First Name</strong>: {props.firstName} <br/>
        <strong>Last Name</strong>: {props.lastName} <br/>
        <strong>Gender</strong>: {props.gender} <br/>
        <strong>Height</strong>: {(props.height/100).toFixed(2)}m <br/>
        <strong>Birth</strong>: {props.birth.toString().substr(0,15)} <br/>
      </div>
    </div>
  )
}

export default IdCard