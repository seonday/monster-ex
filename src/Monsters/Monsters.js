import React, { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import './Monsters.scss';

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  const searchMonster = (event) => {
    setSearch(event.target.value);
  };

  // 문자열이 특정 문자열을 포함하는지(includes), 기존의 데이터와 input을 통해 들어오는 값 모두 소문자로 통일(toLowerCase)
  // 주어진 함수의 조건을 통과하는 요소를 새로운 배열로 반환(Array.filter)
  const filteredItem = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        value={search}
        placeholder="Search"
        onChange={searchMonster}
      />
      {/* props로 자식컴포넌트에 데이터 넘김 */}
      <CardList monsterList={filteredItem} />
    </div>
  );
}

export default Monsters;
