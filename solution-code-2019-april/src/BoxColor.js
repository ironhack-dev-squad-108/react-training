import React from 'react'

function rgbToHex (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) hex = "0" + hex;
  return hex;
}

function fullColorHex(r,g,b) {
  return rgbToHex(r)+rgbToHex(g)+rgbToHex(b)
  // // Other solution
  // return ("0"+r.toString(16)).substr(-2)
  //      + ("0"+g.toString(16)).substr(-2)
  //      + ("0"+b.toString(16)).substr(-2)
}

function BoxColor({ r,g,b }) {
  r = Number(r)
  g = Number(g)
  b = Number(b)
  let style = {
    border: "1px solid black",
    textAlign: "center",
    padding: 10,
    margin: 5,
    backgroundColor: `rgb(${r},${g},${b})`,
    color: r + g + b < 100*3 ? 'white' : 'black'
  }
  let hex = fullColorHex(r,g,b)
  return (
    <div style={style}>
      rgb({r},{g},{b}) <br/>
      #{hex}
    </div>
  )
}

export default BoxColor