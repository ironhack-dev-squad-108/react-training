import React from 'react'
import './CreditCard.css'

function CreditCard(props) {
  let style = {
    backgroundColor: props.bgColor,
    color: props.color 
  }
  let hiddenNumber = "•••• •••• •••• " + props.number.substr(-4)
  let expirationMonth2Digits = ("0"+props.expirationMonth).substr(-2)
  return (
    <div className="CreditCard" style={style}>
      <div className="type">
        <img src={props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"} alt=""/>
      </div>
      <div className="number">{hiddenNumber}</div>
      <div>
        <span className="expire">Expires {expirationMonth2Digits}/{props.expirationYear}</span>
        <span className="bank">{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  )
}

export default CreditCard