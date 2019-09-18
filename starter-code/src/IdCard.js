import React from "react";

function IdCard(props) {
  return (
    <div className="IdCard box">
      <img src={props.picture} alt="" className="IdCard__img" />
      <div className="IdCard__content">
        <strong>First Name</strong> : {props.firstname} <br />
        <strong>Lastname</strong> : {props.lastname} <br />
        <strong>Gender</strong> : {props.gender} <br />
        <strong>Height</strong> : {props.height} <br />
        <strong> Birth </strong> : {props.birth.toGMTString().substr(0, 16)}
      </div>
    </div>
  );
}

export default IdCard;
