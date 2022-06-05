import React from 'react'

function ScoreBoard({score}) {
  return (
    <div className='scoreContainer'>
        <h1>{score}</h1>
    </div>
  )
}

export default ScoreBoard