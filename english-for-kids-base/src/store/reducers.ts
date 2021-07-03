import { combineReducers } from 'redux';
import {
  CategoriesInitialState,
  MainAction,
  MainInitialState,
  StatisticsInitialState,
} from '../type';

import { SWITCH_ITEM_CHANGED } from './types';

const mainInitialState: MainInitialState = { switchItem: 'train' };
const categoriesInitialState: CategoriesInitialState = {
  categories: 'CategoriesInitialState',
};
const statisticsInitialState: StatisticsInitialState = {
  statistics: 'StatisticsInitialState',
};

const mainReducer = (state = mainInitialState, action: MainAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const categoriesReducer = (
  state = categoriesInitialState,
  action: MainAction,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const statisticsReducer = (
  state = statisticsInitialState,
  action: MainAction,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  main: mainReducer,
  categories: categoriesReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
