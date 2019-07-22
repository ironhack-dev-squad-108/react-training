import React from 'react';
import "./BoxColor.css";

let rgbToHex = function (rgb) { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  let fullColorHex = function(r,g,b) {   
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return red+green+blue;
  };

function BoxColor(props) {
    let style = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    return (<div className="box" style={style}> 
    <p>rgb({props.r},{props.g},{props.b})</p>
    <p>#{fullColorHex(props.r,props.g,props.b)}</p>
    </div>);
}

export default BoxColor;