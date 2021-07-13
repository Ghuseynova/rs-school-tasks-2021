import {
  SWITCH_VALUE_CHANGED,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
  MENU_OPEN,
  SET_CATEGORY,
} from './store/types';

interface MainInitialState {
  switchItem: string;
  categories: Category[];
  errorMessage: string;
  isPlay: boolean;
  isMenuOpen: boolean;
  selectedCategory: string;
}

interface CategoryInitialState {
  isGameStarted: boolean;
  playedAudio: string;
  audios: string[];
}

interface StatisticsInitialState {
  statistics: string;
}

interface SwitchItemSet {
  type: typeof SWITCH_VALUE_CHANGED;
  payload: boolean;
}

interface SetIsMenuOpen {
  type: typeof MENU_OPEN;
  payload: boolean;
}

interface SetSelectedCategory {
  type: typeof SET_CATEGORY;
  payload: string;
}

interface SetGameStart {
  type: typeof SET_GAME_START;
  payload: boolean;
}

interface SetAudios {
  type: typeof SET_AUDIOS;
  payload: string[];
}

interface SetPlayedAudio {
  type: typeof SET_PLAYED_AUDIO;
  payload: string;
}

interface Word {
  word: string;
  translation: stirng;
  image: string;
  audioSrc: string;
}

interface Category {
  id: number;
  category: string;
  wordsCount: number;
  image: string;
  words: Word[];
}

interface FetchCategoriesRequest {
  type: typeof FETCH_CATEGORIES_REQUEST;
  payload: undefined;
}

interface FetchCategoriesSuccess {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
}

interface FetchCategoriesFail {
  type: typeof FETCH_CATEGORIES_FAIL;
  payload: string;
}

type MainAction = SwitchItemSet | FetchCategoriesSuccess | FetchCategoriesFail | SetIsMenuOpen | SetSelectedCategory;
type CategoryAction = SetGameStart | SetAudios | SetPlayedAudio;
