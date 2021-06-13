import {
  CARS_REQUEST,
  WINNERS_REQUEST,
  CAR_CREATED,
  CAR_DELETED,
} from './types';

const getCars = pageNumber => {
  return {
    type: CARS_REQUEST,
    pageNumber,
  };
};

const getWinners = pageNumber => {
  return {
    type: WINNERS_REQUEST,
    pageNumber,
  };
};

const addNewCar = car => ({
  type: CAR_CREATED,
  car,
});

const deleteCar = id => ({
  type: CAR_DELETED,
  id,
});

export { getCars, getWinners, addNewCar, deleteCar };
