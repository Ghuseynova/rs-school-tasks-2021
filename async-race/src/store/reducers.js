import {
  CARS_SUCCESS,
  WINNERS_SUCCESS,
  PAGE_CHANGED,
  NEW_CAR_COLOR_CHANGED,
  NEW_CAR_NAME_CHANGED,
  CAR_SELECTED,
  SELECTED_CAR_COLOR_CHANGED,
  SELECTED_CAR_NAME_CHANGED,
} from './types';

const initialState = {
  currentPage: 'garage',
  cars: [],
  winners: [],
  carsCount: 0,
  winnersCount: 0,
  garagePageNumber: 1,
  winnersPageNumber: 1,
  newCar: {
    color: '',
    name: '',
  },
  selectedCar: {
    name: '',
    color: '',
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.page,
      };
    case CARS_SUCCESS:
      return {
        ...state,
        cars: action.cars.data,
        carsCount: action.cars.count,
      };

    case WINNERS_SUCCESS:
      return {
        ...state,
        winners: action.winners.data,
        winnersCount: action.winners.count,
      };
    case NEW_CAR_COLOR_CHANGED:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          color: action.color,
        },
      };
    case NEW_CAR_NAME_CHANGED:
      return {
        ...state,
        newCar: {
          ...state.newCar,
          name: action.name,
        },
      };
    case CAR_SELECTED:
      return {
        ...state,
        selectedCar: action.selectedCar,
      };
    case SELECTED_CAR_NAME_CHANGED:
      return {
        ...state,
        selectedCar: {
          ...state.selectedCar,
          name: action.name,
        },
      };
    case SELECTED_CAR_COLOR_CHANGED:
      return {
        ...state,
        selectedCar: {
          ...state.selectedCar,
          color: action.color,
        },
      };
    default:
      return state;
  }
}
