import React from 'react'
import './Card.css';

function Card({ item }) {
  return (
    <div className='card'>
      <img className='card__img' src={item.image} />
      <div className='card__notes'>
        <div className='card__country'>{item.country}</div>
        <div className='card__localization'>{item.localization}</div>
        <div className='card__date'>{item.date}</div>
        <div className='card__description'>{item.description}</div>
      </div>

    </div>
  )
}

export default Card