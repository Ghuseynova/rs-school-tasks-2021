import React from 'react';
import CategoryCards from '../../components/category-cards';

import './main.scss';

const Main = (): JSX.Element => {
  return (
    <div className="main">
      <div className="main__container container">
        <div className="main__top">
          <CategoryCards className="main__cards" />
        </div>
      </div>
    </div>
  );
};

export default Main;
