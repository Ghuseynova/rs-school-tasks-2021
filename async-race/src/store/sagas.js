import { call, put, takeEvery, all } from 'redux-saga/effects';
import Api from '../api';
import {
  CARS_REQUEST,
  CARS_SUCCESS,
  CARS_ERROR,
  WINNERS_REQUEST,
  WINNERS_SUCCESS,
  WINNERS_ERROR,
} from './types';

function* fetchCars(action) {
  try {
    const cars = yield call(Api.fetchCars, action.pageNumber);
    console.log(cars);
    yield put({ type: CARS_SUCCESS, cars });
    console.log(cars);
  } catch (e) {
    // console.log(e);
    yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* fetchWinners(action) {
  try {
    const winners = yield call(Api.fetchWinners, action.pageNumber);
    console.log(winners);
    yield put({ type: WINNERS_SUCCESS, winners });
    console.log(winners);
  } catch (e) {
    console.log(e);
    yield put({ type: WINNERS_ERROR, message: e.message });
  }
}

function* watchFetchCars() {
  yield takeEvery(CARS_REQUEST, fetchCars);
}

function* watchFetchWinners() {
  yield takeEvery(WINNERS_REQUEST, fetchWinners);
}

function* rootSaga() {
  yield all([watchFetchCars(), watchFetchWinners()]);
}

export default rootSaga;
