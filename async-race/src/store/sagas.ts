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
  CAR_UPTADED,
  CAR_ENGINE_STARTED_REQUEST,
  CAR_ENGINE_STARTED_SUCCESS,
  CAR_ENGINE_STARTED_ERROR,
  // CAR_WON,
  // CAR_ENGINE_STOPPED_REQUEST,
  // CAR_ENGINE_STOPPED_SUCCESS,
  // CAR_ENGINE_STOPPED_ERROR,
} from './types';

import { getCars, getWinners } from './actions';

function* fetchCars(action: { type: 'CARS_REQUEST'; pageNumber: number }) {
  try {
    const cars: ReturnType<typeof Api.fetchCars> = yield call(
      Api.fetchCars,
      action.pageNumber,
    );
    yield put({ type: CARS_SUCCESS, cars });
  } catch (e) {
    yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* fetchWinners(action: {
  type: 'WINNERS_REQUEST';
  payload: {
    pageNumber: number;
    sort: string;
    order: string;
  };
}) {
  try {
    const winners: ReturnType<typeof Api.fetchWinners> = yield call(
      Api.fetchWinners,
      action.payload,
    );
    yield put({ type: WINNERS_SUCCESS, winners });
  } catch (e) {
    yield put({ type: WINNERS_ERROR, message: e.message });
  }
}

function* createCar(action: {
  type: 'CAR_CREATED';
  car: { name: string; color: string };
}) {
  try {
    yield call(Api.createCar, action.car);
    yield put(getCars());
  } catch (e) {
    yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* updateCar(action: {
  type: 'CAR_UPTADED';
  car: { name: string; color: string; id: number };
}) {
  try {
    yield call(Api.updateCar, action.car);
    yield put(getCars());
  } catch (e) {
    // console.log(e);
  }
}

function* deleteCarFromGarage(action: { type: 'CAR_DELETED'; id: number }) {
  try {
    yield call(Api.deleteCarFromGarage, action.id);
    yield put(getCars());
  } catch (e) {
    // yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* deleteCarFromWinners(action: { type: 'CAR_DELETED'; id: number }) {
  try {
    yield call(Api.deleteCarFromWinners, action.id);
    yield put(getWinners());
  } catch (e) {
    // yield put({ type: CARS_ERROR, message: e.message });
  }
}

function* startCar(action: {
  type: 'CAR_ENGINE_STARTED_REQUEST';
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
      const status: ReturnType<typeof Api.switchModeToDrive> = yield call(
        Api.switchModeToDrive,
        { id, status: 'drive' },
      );
      yield put({ type: 'SWITCHED_TO_DRIVE', status });
    }
  } catch (e) {
    yield put({ type: CAR_ENGINE_STARTED_ERROR, message: e.message });
  }
}

// function* stopCar(action) {
//   try {
//     // const data = yield call(Api.stopCar, action.payload);
//   } catch (e) {
//     // console.log(e);
//   }
// }

// function* addWinner(action:any) {
//   const newTime = action.winner.time;
//   try {
//     const data:ReturnType<typeof Api.getWinner>  = yield call(Api.getWinner, action.winner.id);

//     if (data.status === 200) {
//       const { id, wins, time } = data.winner;

//       const winner = {
//         id,
//         wins: wins + 1,
//         time: newTime < time ? newTime : time,
//       };

//       yield call(Api.updateWinner, winner);
//       yield put(getWinners());
//     } else {
//       yield call(Api.createWinner, action.winner);
//       yield put(getWinners());
//     }
//   } catch (e) {
//     // console.log(e);
//   }
// }

// watchers

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

// function* watchStopCar() {
//   yield takeEvery(CAR_ENGINE_STARTED_REQUEST, stopCar);
// }

// function* watchAddWinner() {
//   yield takeEvery(CAR_WON, addWinner);
// }

function* rootSaga(): any {
  yield all([
    watchFetchCars(),
    watchFetchWinners(),
    watchCreateCar(),
    watchUpdateCar(),
    watchDeleteCarFromGarage(),
    watchDeleteCarFromWinners(),
    watchStartCar(),
    // watchAddWinner(),
    // watchStopCar(),
  ]);
}

export default rootSaga;
