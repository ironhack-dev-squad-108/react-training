import React from 'react'

// Convert a number into a hex string with 2 characters (extra "0" at the front if necessary)
function rgbToHex(number) {
  if (number < 16) return '0'+number.toString(16)
  else return number.toString(16)
}

export default function BoxColor({r,g,b}) {
  let hexColor = "#"+ rgbToHex(r) + rgbToHex(g) + rgbToHex(b)
  // If (r,g,b) is very light, text color is "black", "white" otherwise
  let color = 2*r+3*g+b > 800 ? "black" : "white"
  let style = {
    // backgroundColor: hexColor, // Solution of Seb
    backgroundColor: `rgb(${r},${g},${b})`,
    color,
  }
  return (
    <div className="BoxColor" style={style}>
      rgb({r},{g},{b}) <br/>
      {hexColor}
    </div>
  )
}
