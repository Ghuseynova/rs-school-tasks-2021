import {
  FetchCategoriesRequest,
  SetAudios,
  SetGameStart,
  SetIsMenuOpen,
  SetPlayedAudio,
  SetSelectedCategory,
  SwitchItemSet,
} from '../type';
import {
  FETCH_CATEGORIES_REQUEST,
  MENU_OPEN,
  SET_AUDIOS,
  SET_CATEGORY,
  SET_GAME_START,
  SET_PLAYED_AUDIO,
  SWITCH_VALUE_CHANGED,
} from './types';

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

const setGameStart = (value: boolean): SetGameStart => ({
  type: SET_GAME_START,
  payload: value,
});

const setPlayedAudio = (audio: string): SetPlayedAudio => ({
  type: SET_PLAYED_AUDIO,
  payload: audio,
});

const setAudios = (audios: string[]): SetAudios => ({
  type: SET_AUDIOS,
  payload: audios,
});

const fetchWords = (): void => {};

export {
  fetchCategories,
  fetchWords,
  setSwitchValue,
  setIsMenuOpen,
  setSelectedCategory,
  setGameStart,
  setAudios,
  setPlayedAudio,
};
