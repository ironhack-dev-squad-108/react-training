import React from "react";

function Random(props) {
    let style = {border: "1px solid black", margin: 10, padding: 5}
    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);
    return <p style={style}> {Math.floor(Math.random() * (max - min) + min)} </p>;
}

export default Random;