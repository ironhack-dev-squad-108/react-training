import React from 'react';
import './IdCard.css'

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt=""/>
      <div>
        <strong>First Name</strong>: {props.firstName} <br/>
        <strong>Last Name</strong>: {props.lastName} <br/>
        <strong>Gender</strong>: {props.gender} <br/>
        <strong>Height</strong>: {props.height/100}m <br/>
        <strong>Birth</strong>: {("0"+props.birth.getDay()).substr(-2)}/{("0"+props.birth.getMonth()).substr(-2)}/{props.birth.getFullYear()} <br/>
        {/* <strong>Birth</strong>: {props.birth.toDateString()} <br/> */}
      </div>
    </div>
  )
}

export default IdCard