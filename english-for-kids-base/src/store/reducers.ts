import { combineReducers } from 'redux';
import { CategoryAction, CategoryInitialState, MainAction, MainInitialState, StatisticsInitialState } from '../type';

import {
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_SUCCESS,
  MENU_OPEN,
  SET_AUDIOS,
  SET_CATEGORY,
  SET_GAME_START,
  SET_PLAYED_AUDIO,
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
  isGameStarted: false,
  playedAudio: '',
  audios: [],
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

const categoryReducer = (state = categoryInitialState, action: CategoryAction) => {
  switch (action.type) {
    case SET_GAME_START:
      return {
        ...state,
        isGameStarted: action.payload,
      };

    case SET_AUDIOS:
      return {
        ...state,
        audios: action.payload,
      };
    case SET_PLAYED_AUDIO:
      return {
        ...state,
        playedAudio: action.payload,
      };

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
