import React from "react";

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  let srcImage = type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
  let mm = ("0" + expirationMonth).substr(-2) // .substr(-2) to take the last 2 characters
  let yy = expirationYear.toString().substr(2)
  let style = {
    backgroundColor: bgColor,
    color: color
  };
  return (
    <div className="CreditCard" style={style}>
      <img className="CreditCard__type" alt="type" src={srcImage} />
      <div className="CreditCard__number">
        •••• •••• •••• {number.substr(12)}
      </div>
      <div className="CreditCard__3rd-line">
        <span className="CreditCard__expiration">
          Expires {mm}/{yy}
        </span>
        <span className="CreditCard__bank">{bank}</span>
      </div>
      <div className="CreditCard__owner">{owner}</div>
    </div>
  );
}
