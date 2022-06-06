import React from 'react'

function CardList({imgData, handleClick}) {

  return (
    <div className='cardListContainer'>
        {imgData.map((item) => (
          <div key={item.id} id={item.id} onClick={() => handleClick(item.id)} className='cardContainer'>
            <img width='200px' height='195px' src={item.src} alt={item.name}></img>
          </div>
        ))}
    </div>
  )
}

export default CardList