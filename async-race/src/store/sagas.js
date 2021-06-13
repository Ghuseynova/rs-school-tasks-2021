import { call, put, takeEvery, all } from 'redux-saga/effects';
import Api from '../api';
import {
  CARS_REQUEST,
  CARS_SUCCESS,
  CARS_ERROR,
  WINNERS_REQUEST,
  WINNERS_SUCCESS,
  WINNERS_ERROR,
  CAR_CREATED,
  CAR_DELETED,
} from './types';

function* fetchCars(action) {
  try {
    const cars = yield call(Api.fetchCars, action.pageNumber);
    yield put({ type: CARS_SUCCESS, cars });
  } catch (e) {
    yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* fetchWinners(action) {
  try {
    const winners = yield call(Api.fetchWinners, action.pageNumber);
    yield put({ type: WINNERS_SUCCESS, winners });
  } catch (e) {
    yield put({ type: WINNERS_ERROR, message: e.message });
  }
}

function* createCar(action) {
  try {
    yield call(Api.createCar, action.car);
    const cars = yield call(Api.fetchCars, action.pageNumber);
    yield put({ type: CARS_SUCCESS, cars });
  } catch (e) {
    yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* deleteCarFromGarage(action) {
  console.log(action.id);
  try {
    yield call(Api.deleteCarFromGarage, action.id);
    const cars = yield call(Api.fetchCars, action.pageNumber);
    yield put({ type: CARS_SUCCESS, cars });
  } catch (e) {
    // yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* deleteCarFromWinners(action) {
  console.log(action.id);
  try {
    yield call(Api.deleteCarFromWinners, action.id);
    const winners = yield call(Api.fetchWinners, action.pageNumber);
    yield put({ type: WINNERS_SUCCESS, winners });
  } catch (e) {
    // yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* watchFetchCars() {
  yield takeEvery(CARS_REQUEST, fetchCars);
}

function* watchFetchWinners() {
  yield takeEvery(WINNERS_REQUEST, fetchWinners);
}

function* watchCreateCar() {
  yield takeEvery(CAR_CREATED, createCar);
}

function* watchDeleteCarFromGarage() {
  yield takeEvery(CAR_DELETED, deleteCarFromGarage);
}

function* watchDeleteCarFromWinners() {
  yield takeEvery(CAR_DELETED, deleteCarFromWinners);
}

function* rootSaga() {
  yield all([
    watchFetchCars(),
    watchFetchWinners(),
    watchCreateCar(),
    watchDeleteCarFromGarage(),
    watchDeleteCarFromWinners(),
  ]);
}

export default rootSaga;
