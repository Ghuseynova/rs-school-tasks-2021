import {
  CARS_REQUEST,
  WINNERS_REQUEST,
  CAR_CREATED,
  CAR_DELETED,
  CAR_SELECTED,
  CAR_UPTADED,
  PAGE_NUMBER_CHANGED,
  CAR_ENGINE_STARTED_REQUEST,
  CAR_ENGINE_STOPPED_REQUEST,
  CAR_WON,
} from './types';

const getCars = (pageNumber = 1) => {
  return {
    type: CARS_REQUEST,
    pageNumber,
  };
};

const getWinners = (pageNumber = 1, sort = 'id', order = 'ASC') => {
  return {
    type: WINNERS_REQUEST,
    payload: {
      pageNumber,
      sort,
      order,
    },
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

const startCar = (id, status) => {
  return {
    type: CAR_ENGINE_STARTED_REQUEST,
    payload: {
      id,
      status,
    },
  };
};

const stopCar = (id, status) => {
  return {
    type: CAR_ENGINE_STOPPED_REQUEST,
    payload: {
      id,
      status,
    },
  };
};

const addNewWinner = winner => ({
  type: CAR_WON,
  winner,
});

export {
  getCars,
  getWinners,
  addNewCar,
  deleteCar,
  selectCar,
  updateCar,
  setPageNumber,
  startCar,
  stopCar,
  addNewWinner,
};
