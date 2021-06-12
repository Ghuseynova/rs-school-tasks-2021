import { CARS_SUCCESS, WINNERS_SUCCESS, PAGE_CHANGED } from './types';

const initialState = {
  currentPage: 'garage',
  cars: [],
  winners: [],
  carsCount: 0,
  winnersCount: 0,
  garagePageNumber: 1,
  winnersPageNumber: 1,
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
        carsCount: action.cars.count,
      };

    case WINNERS_SUCCESS:
      console.log(action.winners);
      return {
        ...state,
        winners: action.winners.data,
        winnersCount: action.winners.count,
      };
    default:
      return state;
  }
}
