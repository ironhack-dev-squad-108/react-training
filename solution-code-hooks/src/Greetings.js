import React from "react";

function Greetings(props) {
  let greetings
  if (props.lang === "de") greetings = "Hallo"
  else if (props.lang === "fr") greetings = "Bonjour"
  else if (props.lang === "es") greetings = "Hola"
  else if (props.lang === "pt") greetings = "Olà"
  else greetings = "Hello"

  return (
    <div className="Greetings">
      {greetings} {props.children}
    </div>
  )
}

function Greetings2(props) {
  let greetingsDictionnary = {
    de: "Hallo",
    fr: "Bonjour",
    es: "Hola",
    pt: "Olà",
  }
  return (
    <div className="Greetings">
      {greetingsDictionnary[props.lang] || "Hello"} {props.children}
    </div>
  )
}

export default Greetings