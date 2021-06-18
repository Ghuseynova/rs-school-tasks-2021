import {
  CARS_SUCCESS,
  WINNERS_SUCCESS,
  PAGE_CHANGED,
  NEW_CAR_COLOR_CHANGED,
  NEW_CAR_NAME_CHANGED,
  CAR_SELECTED,
  SELECTED_CAR_COLOR_CHANGED,
  SELECTED_CAR_NAME_CHANGED,
  GARAGE_PAGE_NUMBER_CHANGED,
  WINNER_PAGE_NUMBER_CHANGED,
  CAR_ENGINE_STARTED_SUCCESS,
} from './types';

const initialState = {
  currentPage: 'garage',
  cars: [],
  winners: [],
  carsCount: 0,
  winnersCount: 0,
  status: 200,
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

  startedCars: [],
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
    case GARAGE_PAGE_NUMBER_CHANGED:
      return {
        ...state,
        garagePageNumber: action.num,
      };
    case WINNER_PAGE_NUMBER_CHANGED:
      return {
        ...state,
        winnersPageNumber: action.num,
      };
    case CAR_ENGINE_STARTED_SUCCESS:
      return {
        ...state,
        startedCars: [...state.startedCars, action.data],
        carStatus: 'stop',
      };
    case 'SWITCHED_TO_DRIVE':
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}
