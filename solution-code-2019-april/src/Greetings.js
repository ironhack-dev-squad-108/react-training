import React from 'react';
import './Greetings.css'

function Greetings(props) {
  // console.log(props);
  let greetings = 'Hello'
  if (props.lang === 'fr') greetings = "Bonjour"
  if (props.lang === 'es') greetings = "Hola"
  if (props.lang === 'de') greetings = "Hallo"
  if (props.lang === 'pt') greetings = "Ola"
  
  return (
    <div className="Greetings">
      {greetings} {props.children}
    </div>
  )
}

export default Greetings