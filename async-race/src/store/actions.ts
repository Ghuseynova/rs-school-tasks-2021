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

const getCars = (pageNumber = 1): { type: string; pageNumber: number } => {
  return {
    type: CARS_REQUEST,
    pageNumber,
  };
};

const getWinners = (
  pageNumber = 1,
  sort = 'id',
  order = 'ASC',
): {
  type: string;
  payload: {
    pageNumber: number;
    sort: string;
    order: string;
  };
} => {
  return {
    type: WINNERS_REQUEST,
    payload: {
      pageNumber,
      sort,
      order,
    },
  };
};

const addNewCar = (car: { name: string; color: string }): { type: string; car: { name: string; color: string } } => ({
  type: CAR_CREATED,
  car,
});

const deleteCar = (id: number): { type: string; id: number } => ({
  type: CAR_DELETED,
  id,
});

const selectCar = (selectedCar: {
  name: string;
  color: string;
  id: number;
}): {
  type: string;
  selectedCar: { name: string; color: string; id: number };
} => ({
  type: CAR_SELECTED,
  selectedCar,
});

const updateCar = (car: {
  name: string;
  color: string;
  id: number;
}): {
  type: string;
  car: { name: string; color: string; id: number };
} => {
  return {
    type: CAR_UPTADED,
    car,
  };
};

const setGaragePageNumber = (
  num: number,
): {
  type: string;
  num: number;
} => {
  return {
    type: GARAGE_PAGE_NUMBER_CHANGED,
    num,
  };
};

const setWinnerPageNumber = (
  num: number,
): {
  type: string;
  num: number;
} => {
  return {
    type: WINNER_PAGE_NUMBER_CHANGED,
    num,
  };
};

const startCar = (
  id: number,
  status: string,
): {
  type: string;
  payload: {
    id: number;
    status: string;
  };
} => {
  return {
    type: CAR_ENGINE_STARTED_REQUEST,
    payload: {
      id,
      status,
    },
  };
};

const stopCar = (
  id: number,
  status: string,
): {
  type: string;
  payload: {
    id: number;
    status: string;
  };
} => {
  return {
    type: CAR_ENGINE_STOPPED_REQUEST,
    payload: {
      id,
      status,
    },
  };
};

const addNewWinner = (winner: {
  id: number;
  wins: number;
  time: number;
}): {
  type: string;
  winner: { id: number; wins: number; time: number };
} => ({
  type: CAR_WON,
  winner,
});

const setSortConfig = ({
  order,
  sort,
}: {
  order: string;
  sort: string;
}): {
  type: string;
  payload: { order: string; sort: string };
} => ({
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
