import React from 'react'
import Card from './Card'

function CardList({imgData, shuffleWords}) {

  return (
    <div  className='cardListContainer'>
        {imgData.map((item) => (
          <Card key={item.id} item={item} shuffleWords={shuffleWords} />
        ))}
    </div>
  )
}

export default CardList