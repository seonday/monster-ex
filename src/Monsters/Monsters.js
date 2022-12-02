import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import './Monsters.scss';

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" />
      <CardList list={monsterList} />
    </div>
  );
}

export default Monsters;
