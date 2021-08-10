import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GForm from '../../components/g-form';
import GarageItem from '../../components/garage-item';
import Pagination from '../../components/pagination';
import { getCars, setGaragePageNumber } from '../../store/actions';

import './garage.scss';

const selectCars = (state: {
  cars: { name: string; color: string; id: number }[];
}) => state.cars;

const Garage = (): JSX.Element => {
  const dispatch = useDispatch();

  const carsPerPage = 7;
  const cars = useSelector(selectCars);
  const count = useSelector((state: { carsCount: number }) => state.carsCount);
  let pageNumber = useSelector(
    (state: { garagePageNumber: number }) => state.garagePageNumber,
  );

  const numGaragePages = Math.ceil(count / carsPerPage);

  function handlePrevBtn() {
    pageNumber -= 1;
    if (pageNumber < 1) {
      pageNumber = 1;
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
        <GForm />
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
            return (
              <GarageItem
                key={car.id}
                id={car.id}
                className="garage__item"
                name={car.name}
                color={car.color}
              />
            );
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
