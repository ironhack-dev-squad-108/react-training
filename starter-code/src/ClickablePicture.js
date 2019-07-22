import React, {useState} from "react";

function ClickablePicture(props) {
    const [picture, setPicture] = useState(props.img);
    
    return (<img  src={picture}/>);
}

export default ClickablePicture;