import React from 'react';
import Card from './Card';
import data from '../data';
import './Main.css';

function Main() {
  const cardElements = data.map(item => {
    return (
      <Card
        id={item.id}
        item={item}
      />
    )
  })
  return (
    <div>{cardElements}</div>

  )
}

export default Main