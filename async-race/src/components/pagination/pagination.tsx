import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../button';

import { setPageNumber, getCars } from '../../store/actions';

import './pagination.scss';

type PaginationTypes = {
  className: string;
};

const Pagination = ({ className }: PaginationTypes): JSX.Element => {
  const dispatch = useDispatch();
  const carsPerPage = 7;
  const carsCount = useSelector(
    (state: { carsCount: number }) => state.carsCount,
  );
  let garagePageNumber = useSelector(
    (state: { garagePageNumber: number }) => state.garagePageNumber,
  );
  const numGaragePages = Math.ceil(carsCount / carsPerPage);

  function handlePrevBtn() {
    garagePageNumber -= 1;
    if (garagePageNumber < 1) {
      garagePageNumber = 1;
    }

    dispatch(setPageNumber(garagePageNumber));
    dispatch(getCars(garagePageNumber));
  }

  function handleNextBtn() {
    garagePageNumber += 1;
    if (garagePageNumber > numGaragePages) {
      garagePageNumber = numGaragePages;
    }

    dispatch(setPageNumber(garagePageNumber));
    dispatch(getCars(garagePageNumber));
  }

  return (
    <div className={`pagination ${className}`}>
      <Button
        className={`button button--md ${
          garagePageNumber === 1 ? 'button--disable' : ''
        } button--lightviolet pagination__btn pagination__btn--prev`}
        text="prev"
        callback={() => {
          handlePrevBtn();
        }}
      />
      <Button
        className={`button button--md ${
          garagePageNumber === numGaragePages ? 'button--disable' : ''
        } button--lightviolet pagination__btn pagination__btn--next`}
        text="next"
        callback={() => {
          handleNextBtn();
        }}
      />
    </div>
  );
};

export default Pagination;
