import React from "react"

function Rating({children}) {
    
    let string = "";
    let numOfFullStars = Math.round(children);
    let numOfEmptyStars = 5 - numOfFullStars;

    for (let i=0; i<numOfFullStars;i++) {
       
        string+="★"
    }
    
    for (let i=0; i<numOfEmptyStars;i++) {
        string+="☆"
    }
    return <h1>{string}</h1>;
}

export default Rating;