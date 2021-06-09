import React from 'react';
import CarIcon from '../car';

import './w-table.scss';

const winners = [
  {
    id: 1,
    name: 'tesla',
    color: '#fff',
    wins: 2,
    time: 2.09,
  },
  {
    id: 2,
    name: 'bmw',
    color: '#fafafa',
    wins: 1,
    time: 0.09,
  },
  {
    id: 3,
    name: 'mercedes',
    color: '#ccc',
    wins: 3,
    time: 2,
  },
  {
    id: 4,
    name: 'jaguar',
    color: '#cacaca',
    wins: 1,
    time: 1.09,
  },
  {
    id: 5,
    name: 'toyoto',
    color: '#0c0c0c',
    wins: 4,
    time: 3,
  },
];

const WinnersTable = (): JSX.Element => {
  return (
    <table className="w-table">
      <thead className="w-table__head">
        <tr className="w-table__row">
          <th className="w-table__col w-table__col--number">
            <button className="w-table__btn" type="button">
              Number
            </button>
          </th>
          <th className="w-table__col w-table__col--car">
            <button className="w-table__btn" type="button">
              Car
            </button>
          </th>
          <th className="w-table__col w-table__col--name">
            <button className="w-table__btn" type="button">
              Name
            </button>
          </th>
          <th className="w-table__col w-table__col--wins">
            <button className="w-table__btn" type="button">
              Wins
            </button>
          </th>
          <th className="w-table__col w-table__col--time">
            <button className="w-table__btn" type="button">
              Best time(seconds)
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="w-table__body">
        {winners.map(item => (
          <tr className="w-table__row" key={item.id}>
            <td className="w-table__col">{item.id}</td>
            <td className="w-table__col">
              <CarIcon color={item.color} className="w-table__car" />
            </td>
            <td className="w-table__col">{item.name}</td>
            <td className="w-table__col">{item.wins}</td>
            <td className="w-table__col">{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WinnersTable;
