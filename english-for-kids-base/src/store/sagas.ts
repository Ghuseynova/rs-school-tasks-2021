import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Api from '../api';
import {
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from './types';

function* fetchCategories() {
  try {
    const data: ReturnType<typeof Api.fetchCategories> = yield call(
      Api.fetchCategories,
    );

    yield put({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_CATEGORIES_FAIL, payload: error.message });
  }
}

function* watchFetchCategories(): SagaIterator {
  yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories);
}

function* rootSaga(): Generator {
  yield all([fork(watchFetchCategories)]);
}

export default rootSaga;
