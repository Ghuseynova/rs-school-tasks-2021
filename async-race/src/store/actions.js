import {
  CARS_REQUEST,
  WINNERS_REQUEST,
  CAR_CREATED,
  CAR_DELETED,
  CAR_SELECTED,
  CAR_UPTADED,
  GARAGE_PAGE_NUMBER_CHANGED,
  WINNER_PAGE_NUMBER_CHANGED,
  CAR_ENGINE_STARTED_REQUEST,
  CAR_ENGINE_STOPPED_REQUEST,
  CAR_WON,
  SORT_DIRECTION_CHANGED,
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

const setGaragePageNumber = num => {
  return {
    type: GARAGE_PAGE_NUMBER_CHANGED,
    num,
  };
};

const setWinnerPageNumber = num => {
  return {
    type: WINNER_PAGE_NUMBER_CHANGED,
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

const setSortConfig = ({ order, sort }) => ({
  type: SORT_DIRECTION_CHANGED,
  payload: {
    order,
    sort,
  },
});

export {
  getCars,
  getWinners,
  addNewCar,
  deleteCar,
  selectCar,
  updateCar,
  setGaragePageNumber,
  startCar,
  stopCar,
  addNewWinner,
  setWinnerPageNumber,
  setSortConfig,
};
