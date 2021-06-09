import React from 'react';
import GForm from '../../components/g-form';
import GarageItem from '../../components/garage-item';
import Pagination from '../../components/pagination';

import './garage.scss';

const Garage = (): JSX.Element => {
  return (
    <div className="garage">
      <div className="garage__form">
        <GForm />
      </div>

      <div className="garage__inner">
        <h2 className="title garage__title">
          Garage (<span>{104}</span>)
        </h2>
        <h3 className="subtitle garage__subtitle">
          Page #<span>{1}</span>
        </h3>

        <div className="garage__items">
          <GarageItem className="garage__item" name="Tesla" />
        </div>

        <Pagination className="garage__pagination" />
      </div>
    </div>
  );
};

export default Garage;
