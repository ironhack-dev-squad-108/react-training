
import React from 'react'

let styles = {
  main: {
    border: '2px solid black'
  },
  number: {
    color: 'red'
  }
}

// <Random min={4} max={6}/>
// <Random min={6} max={6}/>
// <Random min={1} max={100}/>

// Solution 1
function Random({ min, max }) {
  let random = Math.floor(Math.random()*(max-min+1))+min
  return (
    <div style={styles.main}>
      Random value between {min} and {max} => {random}
    </div>
  )
}

// // Solution 2
// function Random(props) {
//   let random = Math.floor(Math.random()*(props.max-props.min+1))+props.min
//   return (
//     <div style={styles.main}>
//       Random value between <span style={styles.number}>{props.min}</span> and <span style={styles.number}>{props.max}</span> => <span style={styles.number}>{random}</span>
//     </div>
//   )
// }

export default Random