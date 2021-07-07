import {
  SWITCH_VALUE_CHANGED,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
} from './store/types';

interface MainInitialState {
  switchItem: string;
  categories: Category[];
  errorMessage: string;
  isPlay: boolean;
}

interface CategoryInitialState {
  categories: string;
}

interface StatisticsInitialState {
  statistics: string;
}

interface SwitchItemSet {
  type: typeof SWITCH_VALUE_CHANGED;
  payload: boolean;
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

type MainAction = SwitchItemSet | FetchCategoriesSuccess | FetchCategoriesFail;
