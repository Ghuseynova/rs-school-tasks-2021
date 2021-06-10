import { CARS_SUCCESS, PAGE_CHANGED } from './types';

const initialState = {
  currentPage: 'garage',
  cars: [],
  total: 0,
  garagePageNumber: 1,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.page,
      };
    case CARS_SUCCESS:
      console.log(action.cars);
      return {
        ...state,
        cars: action.cars.data,
        count: action.cars.count,
      };

    default:
      return state;
  }
}
