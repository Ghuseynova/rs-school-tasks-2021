import { combineReducers } from 'redux';
import { CategoryInitialState, MainAction, MainInitialState, StatisticsInitialState } from '../type';

import {
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_SUCCESS,
  MENU_OPEN,
  SET_CATEGORY,
  SWITCH_VALUE_CHANGED,
} from './types';

const mainInitialState: MainInitialState = {
  switchItem: 'train',
  categories: [],
  errorMessage: '',
  isPlay: false,
  isMenuOpen: false,
  selectedCategory: 'Main page',
};
const categoryInitialState: CategoryInitialState = {
  categories: 'CategoriesInitialState',
};
const statisticsInitialState: StatisticsInitialState = {
  statistics: 'StatisticsInitialState',
};

const mainReducer = (state = mainInitialState, action: MainAction) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SWITCH_VALUE_CHANGED:
      return {
        ...state,
        isPlay: action.payload,
      };
    case MENU_OPEN:
      return {
        ...state,
        isMenuOpen: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

const categoryReducer = (state = categoryInitialState, action: MainAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const statisticsReducer = (state = statisticsInitialState, action: MainAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  main: mainReducer,
  category: categoryReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
