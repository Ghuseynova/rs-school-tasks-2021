import { Category } from '../type';

const getCategories = (state: {
  main: { categories: Category[] };
}): Category[] => state.main.categories;
const getWords = (): void => {};

const getIsPlay = (state: { main: { isPlay: boolean } }): boolean =>
  state.main.isPlay;

export { getCategories, getWords, getIsPlay };
