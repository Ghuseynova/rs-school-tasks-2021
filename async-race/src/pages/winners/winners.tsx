import React from 'react';
import Pagination from '../../components/pagination';
import WinnersTable from '../../components/w-table';

import './winners.scss';

const Winners = (): JSX.Element => {
  return (
    <div className="winners">
      <div className="winners__top">
        <h2 className="title winners__title">
          Winners (<span>{104}</span>)
        </h2>
        <h3 className="subtitle winners__subtitle">
          Page #<span>{1}</span>
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
