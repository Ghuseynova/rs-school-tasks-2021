import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWinners, setSortConfig } from '../../store/actions';
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

  const sortConfig = useSelector(
    (state: { sortConfig: { order: string; sort: string } }) =>
      state.sortConfig,
  );

  function handleSort(sort: string) {
    let { order } = sortConfig;
    if (order === 'ASC') {
      order = 'DESC';
    } else {
      order = 'ASC';
    }

    dispatch(getWinners(pageNumber, sort, order));
    dispatch(setSortConfig({ sort, order }));
  }

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
            <button
              type="button"
              className="w-table__btn"
              onClick={() => {
                handleSort('wins');
              }}
            >
              Wins
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 16 28"
                className="w-table__arrow"
              >
                <path d="M16 17c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1zM16 11c0 0.547-0.453 1-1 1h-14c-0.547 0-1-0.453-1-1 0-0.266 0.109-0.516 0.297-0.703l7-7c0.187-0.187 0.438-0.297 0.703-0.297s0.516 0.109 0.703 0.297l7 7c0.187 0.187 0.297 0.438 0.297 0.703z" />
              </svg>
            </button>
          </th>
          <th className="w-table__col w-table__col--time">
            <button
              className="w-table__btn"
              type="button"
              onClick={() => {
                handleSort('time');
              }}
            >
              Best time(seconds)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 16 28"
                className="w-table__arrow"
              >
                <path d="M16 17c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1zM16 11c0 0.547-0.453 1-1 1h-14c-0.547 0-1-0.453-1-1 0-0.266 0.109-0.516 0.297-0.703l7-7c0.187-0.187 0.438-0.297 0.703-0.297s0.516 0.109 0.703 0.297l7 7c0.187 0.187 0.297 0.438 0.297 0.703z" />
              </svg>
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
