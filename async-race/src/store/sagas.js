// import { call, put, takeEvery } from 'redux-saga/effects';
// import Api from '../api';
// import { DOGS_REQUEST, DOGS_SUCCESS, DOGS_ERROR } from './types';

// function* fetchDogs() {
//   try {
//     const dogs = yield call(Api.fetchDogs);
//     // console.log(dogs);
//     yield put({ type: DOGS_SUCCESS, dogs });
//   } catch (e) {
//     // console.log(e);
//     yield put({ type: DOGS_ERROR, message: e.message });
//   }
// }

// function* rootSaga() {
//   yield takeEvery(DOGS_REQUEST, fetchDogs);
// }

// export default rootSaga;
