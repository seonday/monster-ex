import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ list }) {
  return (
    <div className="cardList">
      {list.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
