import { FetchCategoriesRequest, SwitchItemSet } from '../type';
import { FETCH_CATEGORIES_REQUEST, SWITCH_VALUE_CHANGED } from './types';

const fetchCategories = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
  payload: undefined,
});

const setSwitchValue = (value: boolean): SwitchItemSet => ({
  type: SWITCH_VALUE_CHANGED,
  payload: value,
});
const fetchWords = (): void => {};

export { fetchCategories, fetchWords, setSwitchValue };
