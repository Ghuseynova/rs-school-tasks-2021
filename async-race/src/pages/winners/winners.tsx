import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../components/pagination';
import WinnersTable from '../../components/w-table';

import './winners.scss';

const Winners = (): JSX.Element => {
  const count = useSelector(
    (state: { winnersCount: number }) => state.winnersCount,
  );
  const pageNumber = useSelector(
    (state: { winnersPageNumber: number }) => state.winnersPageNumber,
  );

  return (
    <div className="winners">
      <div className="winners__top">
        <h2 className="title winners__title">
          Winners (<span>{count}</span>)
        </h2>
        <h3 className="subtitle winners__subtitle">
          Page #<span>{pageNumber}</span>
        </h3>
      </div>
      <div className="winners__table">
        <WinnersTable />
      </div>
      <Pagination className="winners__pagination" />
    </div>
  );
};

export default Winners;
