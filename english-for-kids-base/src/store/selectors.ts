import { Category } from '../type';

const getCategories = (state: { main: { categories: Category[] } }): Category[] => state.main.categories;

const getWords = (): void => {};

const getIsPlay = (state: { main: { isPlay: boolean } }): boolean => state.main.isPlay;

const getIsMenuOpen = (state: { main: { isMenuOpen: boolean } }): boolean => state.main.isMenuOpen;

const getSelectedCategory = (state: { main: { selectedCategory: string } }): string => state.main.selectedCategory;

export { getCategories, getWords, getIsPlay, getIsMenuOpen, getSelectedCategory };
