import { Category } from '../type';

const getCategories = (state: { main: { categories: Category[] } }): Category[] => state.main.categories;

const getWords = (): void => {};

const getIsPlay = (state: { main: { isPlay: boolean } }): boolean => state.main.isPlay;

const getIsMenuOpen = (state: { main: { isMenuOpen: boolean } }): boolean => state.main.isMenuOpen;

const getSelectedCategory = (state: { main: { selectedCategory: string } }): string => state.main.selectedCategory;

const getIsGameStarted = (state: { category: { isGameStarted: boolean } }): boolean => state.category.isGameStarted;

const getPlayedAudio = (state: { category: { playedAudio: string } }): string => state.category.playedAudio;

const getAudios = (state: { category: { audios: string[] } }): string[] => state.category.audios;

const getCircles = (state: { category: { circles: string[] } }): string[] => state.category.circles;

const getIsModalOpen = (state: { main: { isModalOpen: boolean } }): boolean => state.main.isModalOpen;

export {
  getCategories,
  getWords,
  getIsPlay,
  getIsMenuOpen,
  getSelectedCategory,
  getIsGameStarted,
  getPlayedAudio,
  getAudios,
  getCircles,
  getIsModalOpen,
};
