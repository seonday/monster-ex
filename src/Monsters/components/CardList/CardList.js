import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ monsterList }) {
  return (
    <div className="cardList">
      {/* Array.map함수로 monster Card 생성 */}
      {monsterList.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
