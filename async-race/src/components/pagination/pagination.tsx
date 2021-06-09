import React from 'react';
import Button from '../button';

import './pagination.scss';

type PaginationTypes = {
  className: string;
};

const Pagination = ({ className }: PaginationTypes): JSX.Element => {
  return (
    <div className={`pagination ${className}`}>
      <Button
        className="button button--md button--lightviolet pagination__btn pagination__btn--prev"
        text="prev"
      />
      <Button
        className="button button--md button--lightviolet pagination__btn pagination__btn--next"
        text="next"
      />
    </div>
  );
};

export default Pagination;
