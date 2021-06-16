import {
  CARS_REQUEST,
  WINNERS_REQUEST,
  CAR_CREATED,
  CAR_DELETED,
  CAR_SELECTED,
  CAR_UPTADED,
  PAGE_NUMBER_CHANGED,
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

const selectCar = selectedCar => ({
  type: CAR_SELECTED,
  selectedCar,
});

const updateCar = car => {
  return {
    type: CAR_UPTADED,
    car,
  };
};

const setPageNumber = num => {
  return {
    type: PAGE_NUMBER_CHANGED,
    num,
  };
};

export {
  getCars,
  getWinners,
  addNewCar,
  deleteCar,
  selectCar,
  updateCar,
  setPageNumber,
};
