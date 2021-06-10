import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api';
import { CARS_REQUEST, CARS_SUCCESS, CARS_ERROR } from './types';

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

function* rootSaga() {
  yield takeEvery(CARS_REQUEST, fetchCars);
}

export default rootSaga;
