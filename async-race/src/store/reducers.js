import { DOGS_SUCCESS, PAGE_CHANGED } from './types';

const initialState = {
  currentPage: 'garage',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.page,
      };
    case DOGS_SUCCESS:
      return {
        ...state,
        dogs: action.dogs,
      };

    default:
      return state;
  }
}
