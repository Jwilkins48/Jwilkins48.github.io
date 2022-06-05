import React from 'react'
import Card from './Card'

function CardList({imgData, handleClick}) {

  return (
    <div className='cardListContainer'>
        {imgData.map((item) => (
          <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
    </div>
  )
}

export default CardList