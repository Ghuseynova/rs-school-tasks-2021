import { CARS_REQUEST } from './types';

const getCars = pageNumber => {
  return {
    type: CARS_REQUEST,
    pageNumber,
  };
};

export default getCars;
