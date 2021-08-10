import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GarageForm from '../../components/garage-form';
import GarageItem from '../../components/garage-item';
import Pagination from '../../components/pagination';
import { carsPerPage, defaultPageNumber } from '../../constants';
import { getCars, setGaragePageNumber } from '../../store/actions';
import { getGarageCount, getGaragePageNumber, selectCars } from '../../store/selectors';

import './garage.scss';

const Garage = (): JSX.Element => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const count = useSelector(getGarageCount);
  let pageNumber = useSelector(getGaragePageNumber);

  const numGaragePages = Math.ceil(count / carsPerPage);

  function handlePrevBtn() {
    pageNumber -= defaultPageNumber;
    if (pageNumber < defaultPageNumber) {
      pageNumber = defaultPageNumber;
    }

    dispatch(setGaragePageNumber(pageNumber));
    dispatch(getCars(pageNumber));
  }

  function handleNextBtn() {
    pageNumber += 1;
    if (pageNumber > numGaragePages) {
      pageNumber = numGaragePages;
    }

    dispatch(setGaragePageNumber(pageNumber));
    dispatch(getCars(pageNumber));
  }

  useEffect(() => {
    dispatch(getCars(pageNumber));
  }, [pageNumber, dispatch]);

  return (
    <div className="garage">
      <div className="garage__form">
        <GarageForm />
      </div>

      <div className="garage__inner">
        <h2 className="title garage__title">
          Garage (<span>{count}</span>)
        </h2>
        <h3 className="subtitle garage__subtitle">
          Page #<span>{pageNumber}</span>
        </h3>

        <div className="garage__items">
          {cars.map(car => {
            return <GarageItem key={car.id} id={car.id} className="garage__item" name={car.name} color={car.color} />;
          })}
        </div>

        <Pagination
          className="garage__pagination"
          pageNumber={pageNumber}
          handleNextBtn={handleNextBtn}
          handlePrevBtn={handlePrevBtn}
          numPages={numGaragePages}
        />
      </div>
    </div>
  );
};

export default Garage;
