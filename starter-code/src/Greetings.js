import React from "react";

function Greetings({ lang, children }) {
  let greetings;
  let style = {border: "1px solid black", margin: 10, padding: 5}

  switch (lang) {
    case "en":
            greetings = "Hello";
      break;

    case "de":
            greetings = "Hallo";
      break;

    case "es":
            greetings = "Hola";
      break;

    case "fr":
            greetings = "Bonjour";
      break;

    default:
        greetings = "Hello";
      break;
  }

  let greetingsDict = {
    en: "Hello",
    de: "Hallo",
    es: "Hola",
    // fr: "Bonjour"
  }

  return <p style={style}>{greetingsDict[lang] || "Hello"} {children}</p>;
}

export default Greetings;
