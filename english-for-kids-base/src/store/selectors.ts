import { Category } from '../type';

const getCategories = (state: {
  main: { categories: Category[] };
}): Category[] => state.main.categories;
const getWords = (): void => {};

export { getCategories, getWords };
