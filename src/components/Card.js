import React from 'react'

function Card({ item }) {
  return (
    <div className='card'>
      <img className='card__img' src={item.image} />
      <div className='card__country'>{item.country}</div>
      <div className='card__localization'>{item.localization}</div>
      <div className='card__date'>{item.date}</div>
      <div className='card__description'>{item.description}</div>
    </div>
  )
}

export default Card