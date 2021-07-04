import {
  FETCH_CARS_SUCCESS,
  FETCH_WINNERS_SUCCESS,
  PAGE_CHANGED,
  NEW_CAR_COLOR_CHANGED,
  NEW_CAR_NAME_CHANGED,
  CAR_SELECTED,
  SELECTED_CAR_COLOR_CHANGED,
  SELECTED_CAR_NAME_CHANGED,
  GARAGE_PAGE_NUMBER_CHANGED,
  WINNER_PAGE_NUMBER_CHANGED,
  CAR_ENGINE_STARTED_SUCCESS,
  SORT_DIRECTION_CHANGED,
} from './types';

// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// type ActionTypes = ReturnType<InferValueTypes<typeof actions>> | { type: string; page: string };

type AppState = {
  currentPage: string;
  cars: { name: string; color: string; id: number }[];
  winners: {
    id: number;
    wins: number;
    time: number;
  }[];
  winnersCount: number;
  carsCount: number;
  status: number;
  garagePageNumber: number;
  winnersPageNumber: number;
  newCar: {
    color: string;
    name: string;
  };
  selectedCar: {
    name: string;
    color: string;
  };
  startedCars: { name: string; color: string; id: number; isStarted: boolean }[];
  sortConfig: {
    order: string;
    sort: string;
  };
  carStatus: string;
};

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
  sortConfig: {
    order: 'ASC',
    sort: '',
  },
  carStatus: '',
} as AppState;

interface I1 {
  type: string;
  page: string;
}
interface I2 {
  type: string;
  pageNumber: number;
}
interface I3 {
  type: string;
  payload: {
    pageNumber: number;
    sort: string;
    order: string;
  };
}
interface I4 {
  type: string;
  color: string;
}
interface I5 {
  type: string;
  name: string;
}
interface I6 {
  type: string;
  selectedCar: { name: string; color: string; id: number };
}
interface I7 {
  type: string;
  num: number;
}
interface I8 {
  type: string;
  velocity: number;
  distance: number;
}
interface I9 {
  type: string;
  status: string;
}
interface I10 {
  type: string;
  payload: {
    sort: string;
    order: string;
  };
}

type ActionType = I1 | I2 | I3 | I4 | I5 | I6 | I7 | I8 | I9 | I10;

function appReducer(state = initialState, action: ActionType | any): AppState {
  switch (action.type) {
    case PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.page,
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        cars: action.cars.data,
        carsCount: action.cars.count,
      };

    case FETCH_WINNERS_SUCCESS:
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
    case SORT_DIRECTION_CHANGED:
      return {
        ...state,
        sortConfig: {
          ...state.sortConfig,
          order: action.payload.order,
          sort: action.payload.sort,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
