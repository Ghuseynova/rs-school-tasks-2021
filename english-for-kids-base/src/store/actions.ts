import { FetchCategoriesRequest } from '../type';
import { FETCH_CATEGORIES_REQUEST } from './types';

const fetchCategories = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
  payload: undefined,
});

const fetchWords = (): void => {};

export { fetchCategories, fetchWords };
