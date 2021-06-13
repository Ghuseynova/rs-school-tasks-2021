import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWinners } from '../../store/actions';
import CarIcon from '../car';

import './w-table.scss';

const selectWinners = (state: {
  winners: {
    id: number;
    wins: number;
    time: number;
    color: string;
    name: string;
  }[];
}) => state.winners;

const WinnersTable = (): JSX.Element => {
  const dispatch = useDispatch();
  const winners = useSelector(selectWinners);
  const pageNumber = useSelector(
    (state: { winnersPageNumber: number }) => state.winnersPageNumber,
  );

  useEffect(() => {
    dispatch(getWinners(pageNumber));
  }, [pageNumber, dispatch]);

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
            <td className="w-table__col">{item.name.toLowerCase()}</td>
            <td className="w-table__col">{item.wins}</td>
            <td className="w-table__col">{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WinnersTable;
