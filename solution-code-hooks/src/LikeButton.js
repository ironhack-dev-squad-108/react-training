import React, { useState } from "react";

let colors = ['purple','blue','green','gold','orange','red']

function LikeButton(props) {
  const [counter,setCounter] = useState(0)
  const color = colors[counter % colors.length]
  function handleClick() {
    setCounter(counter+1)
  }
  return (
    <button onClick={handleClick} style={{backgroundColor: color, color: "white", fontWeight: "bold"}}>
      {counter} like{counter !== 1 && 's'}
    </button>
  )
}

export default LikeButton