import React from 'react';
import Button from '../button';

import './pagination.scss';

type PaginationTypes = {
  className: string;
  pageNumber: number;
  numPages: number;
  handlePrevBtn: () => void;
  handleNextBtn: () => void;
};

const Pagination = ({
  className,
  pageNumber,
  numPages,
  handlePrevBtn,
  handleNextBtn,
}: PaginationTypes): JSX.Element => {
  return (
    <div className={`pagination ${className}`}>
      <Button
        className={`button button--md ${
          pageNumber === 1 ? 'button--disable' : ''
        } button--lightviolet pagination__btn pagination__btn--prev`}
        text="prev"
        callback={() => {
          handlePrevBtn();
        }}
      />
      <Button
        className={`button button--md ${
          pageNumber === numPages ? 'button--disable' : ''
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
