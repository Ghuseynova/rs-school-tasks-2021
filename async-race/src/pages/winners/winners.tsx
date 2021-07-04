import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/pagination';
import WinnersTable from '../../components/winners-table';
import { defaultPageNumber, winnersPerPage } from '../../constants';

import { setWinnerPageNumber, getWinners } from '../../store/actions';
import { getWinnersCount, getWinnersPageNumber } from '../../store/selectors';

import './winners.scss';

const Winners = (): JSX.Element => {
  const dispatch = useDispatch();

  const count = useSelector(getWinnersCount);
  let pageNumber = useSelector(getWinnersPageNumber);

  const numWinnerPages = Math.ceil(count / winnersPerPage);

  function handlePrevBtn() {
    pageNumber -= defaultPageNumber;
    if (pageNumber < defaultPageNumber) {
      pageNumber = defaultPageNumber;
    }

    dispatch(setWinnerPageNumber(pageNumber));
    dispatch(getWinners(pageNumber));
  }

  function handleNextBtn() {
    pageNumber += 1;
    if (pageNumber > numWinnerPages) {
      pageNumber = numWinnerPages;
    }

    dispatch(setWinnerPageNumber(pageNumber));
    dispatch(getWinners(pageNumber));
  }

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
      <Pagination
        className="winners__pagination"
        pageNumber={pageNumber}
        handleNextBtn={handleNextBtn}
        handlePrevBtn={handlePrevBtn}
        numPages={numWinnerPages}
      />
    </div>
  );
};

export default Winners;
