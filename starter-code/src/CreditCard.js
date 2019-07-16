import React from 'react'
import "./CreditCard.css"

function formatCardNumber(num) {
    let dotString = "•••• •••• •••• ";
    let stringNum = num.toString();

    return dotString + stringNum.substring(stringNum.length-4,stringNum.length);
}

function CreditCard(props) {
    let cardImgDict = {
        Visa: "/img/visa.png",
        "Master Card": "/img/master-card.svg"
    }

    let style = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    return (<div className="creditCard" style={style}>
        <img src={cardImgDict[props.type]}/>
        <h1>{formatCardNumber(props.number)}</h1>
        <p>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p>
        <p>{props.owner}</p>
    </div>);
}

export default CreditCard;