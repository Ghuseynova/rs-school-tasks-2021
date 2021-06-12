import { CARS_REQUEST, WINNERS_REQUEST } from './types';

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

export { getCars, getWinners };
