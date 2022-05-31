import React from 'react'
import Card from './Card'

function CardList({imgData}) {
  return (
    <div className='cardListContainer'>
        {imgData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default CardList