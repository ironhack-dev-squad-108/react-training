import React from 'react'

export default function Random({min,max}) {
  let random = Math.floor(Math.random()*(max-min+1)+min);
  return (
    <div className="Random">
      Random value between {min} and {max} => {random}
    </div>
  )
}
