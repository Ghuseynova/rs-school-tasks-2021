import { SWITCH_ITEM_CHANGED } from './store/types';

interface MainInitialState {
  switchItem: string;
}

interface CategoriesInitialState {
  categories: string;
}

interface StatisticsInitialState {
  statistics: string;
}

interface SwitchItemSet {
  type: typeof SWITCH_ITEM_CHANGED;
  payload: string;
}

type MainAction = SwitchItemSet;
