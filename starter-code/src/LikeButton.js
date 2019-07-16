import React, {useState} from "react";
import ReactDOM from 'react-dom';

function LikeButton() {
    let colors = ['purple','blue','green','yellow','orange','red'];
    
    const [numOfClicks, setNumOfClicks] = useState(0);
    const color = colors[numOfClicks % colors.length]

    function updateButton () {
        setNumOfClicks(numOfClicks+1);
    }

    let style = {
        backgroundColor: color
    }
    return (<button style={style} onClick={updateButton}> {numOfClicks} {numOfClicks!==1 ? "Likes" : "Like" } </button>)

/*     return (<button style={style} onClick={updateButton}> {numOfClicks} Like{numOfClicks !== 1 && "s"} </button>)
 */}

ReactDOM.render(
    <LikeButton />,
    document.getElementById('root')
  );

export default LikeButton;