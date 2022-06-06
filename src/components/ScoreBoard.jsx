import React from 'react'

function ScoreBoard({score, highScore}) {
  return (
    <div className='scoreContainer'>
        <p className='score'>Current Score: {score}</p>
        <p className='highScore'>High Score: {highScore}</p>
    </div>
  )
}

export default ScoreBoard