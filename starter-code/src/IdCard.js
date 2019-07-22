import React from "react";
import "./IDCard.css";

function IdCard(props) {
 
  return (
    <div className="idCardContainer">
      <img src={props.picture} />
      <div>
        <p>
          <strong>First Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height} 
        </p>
        <p>
          <strong>Birth:</strong>{" "}
          {new Intl.DateTimeFormat("en-GB", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(props.birth)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
