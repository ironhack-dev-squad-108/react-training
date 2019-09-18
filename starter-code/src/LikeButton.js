import React, { useState } from "react";
import "./LikeButton.css";

export default function LikeButton() {
  const [counter, setCounter] = useState(0);
  let colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  let color = colors[counter % colors.length];
  let s = { backgroundColor: color, color: "white" };
  return (
    <button
      style={s}
      className="Button"
      onClick={() => setCounter(counter + 1)}
    >
      {counter} like{counter !== 1 && "s"}
    </button>
  );
}
