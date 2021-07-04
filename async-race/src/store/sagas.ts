import { call, put, takeEvery, all } from 'redux-saga/effects';
import Api from '../api';
import {
  CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  CARS_ERROR,
  WINNERS_REQUEST,
  FETCH_WINNERS_SUCCESS,
  WINNERS_ERROR,
  CAR_CREATED,
  CAR_DELETED,
  CAR_DELETE_FAILED,
  CAR_UPTADED,
  CAR_UPTADE_FAILED,
  CAR_ENGINE_STARTED_REQUEST,
  CAR_ENGINE_STARTED_SUCCESS,
  CAR_ENGINE_STARTED_ERROR,
  CREATE_CAR_ERROR,
} from './types';

import { getCars, getWinners } from './actions';

function* fetchCars(action: { type: string; pageNumber: number }) {
  try {
    const cars: ReturnType<typeof Api.fetchCars> = yield call(Api.fetchCars, action.pageNumber);
    yield put({ type: FETCH_CARS_SUCCESS, cars });
  } catch (e) {
    yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* fetchWinners(action: {
  type: string;
  payload: {
    pageNumber: number;
    sort: string;
    order: string;
  };
}) {
  try {
    const winners: ReturnType<typeof Api.fetchWinners> = yield call(Api.fetchWinners, action.payload);
    yield put({ type: FETCH_WINNERS_SUCCESS, winners });
  } catch (e) {
    yield put({ type: WINNERS_ERROR, message: e.message });
  }
}

function* createCar(action: { type: string; car: { name: string; color: string } }) {
  try {
    yield call(Api.createCar, action.car);
    yield put(getCars());
  } catch (e) {
    yield put({ type: CREATE_CAR_ERROR, message: e.message });
  }
}

function* updateCar(action: { type: string; car: { name: string; color: string; id: number } }) {
  try {
    yield call(Api.updateCar, action.car);
    yield put(getCars());
  } catch (e) {
    yield put({ type: CAR_UPTADE_FAILED, message: e.message });
  }
}

function* deleteCarFromGarage(action: { type: string; id: number }) {
  try {
    yield call(Api.deleteCarFromGarage, action.id);
    yield put(getCars());
  } catch (e) {
    yield put({ type: CAR_DELETE_FAILED, message: e.message });
  }
}

function* deleteCarFromWinners(action: { type: string; id: number }) {
  try {
    yield call(Api.deleteCarFromWinners, action.id);
    yield put(getWinners());
  } catch (e) {
    yield put({ type: CAR_DELETE_FAILED, message: e.message });
  }
}

function* startCar(action: {
  type: string;
  payload: {
    id: number;
    status: string;
  };
}) {
  const { id } = action.payload;
  try {
    const { success, data } = yield call(Api.startCar, action.payload);
    yield put({
      type: CAR_ENGINE_STARTED_SUCCESS,
      data: { ...data, isStarted: true, id },
    });

    if (success) {
      const status: ReturnType<typeof Api.switchModeToDrive> = yield call(Api.switchModeToDrive, {
        id,
        status: 'drive',
      });
      yield put({ type: 'SWITCHED_TO_DRIVE', status });
    }
  } catch (e) {
    yield put({ type: CAR_ENGINE_STARTED_ERROR, message: e.message });
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

function* watchUpdateCar() {
  yield takeEvery(CAR_UPTADED, updateCar);
}

function* watchDeleteCarFromGarage() {
  yield takeEvery(CAR_DELETED, deleteCarFromGarage);
}

function* watchDeleteCarFromWinners() {
  yield takeEvery(CAR_DELETED, deleteCarFromWinners);
}

function* watchStartCar() {
  yield takeEvery(CAR_ENGINE_STARTED_REQUEST, startCar);
}

function* rootSaga(): any {
  yield all([
    watchFetchCars(),
    watchFetchWinners(),
    watchCreateCar(),
    watchUpdateCar(),
    watchDeleteCarFromGarage(),
    watchDeleteCarFromWinners(),
    watchStartCar(),
  ]);
}

export default rootSaga;
