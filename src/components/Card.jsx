import React from 'react'

function Card({ item, shuffleWords}) {
  
  return (
    <>
      <div onClick={shuffleWords} className='cardContainer'>
          <img width='200px' height='195px' src={item.src} alt={item.name}></img>
      </div>
    </>
  )
}

export default Card