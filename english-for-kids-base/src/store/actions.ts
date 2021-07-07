import { FetchCategoriesRequest, SetIsMenuOpen, SetSelectedCategory, SwitchItemSet } from '../type';
import { FETCH_CATEGORIES_REQUEST, MENU_OPEN, SET_CATEGORY, SWITCH_VALUE_CHANGED } from './types';

const fetchCategories = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
  payload: undefined,
});

const setSwitchValue = (value: boolean): SwitchItemSet => ({
  type: SWITCH_VALUE_CHANGED,
  payload: value,
});

const setIsMenuOpen = (value: boolean): SetIsMenuOpen => ({
  type: MENU_OPEN,
  payload: value,
});

const setSelectedCategory = (category: string): SetSelectedCategory => ({
  type: SET_CATEGORY,
  payload: category,
});

const fetchWords = (): void => {};

export { fetchCategories, fetchWords, setSwitchValue, setIsMenuOpen, setSelectedCategory };
