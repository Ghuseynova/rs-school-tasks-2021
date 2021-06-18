import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';

import rootSaga from './sagas';

import { addNewWinner } from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);
// store.dispatch(addNewWinner({ id: 2, wins: 2.8, time: 3 }));
store.dispatch(addNewWinner({ id: 1, wins: 1, time: 1 }));
store.dispatch(addNewWinner({ id: 1, wins: 1, time: 0.3 }));
store.dispatch(addNewWinner({ id: 3, wins: 1, time: 0.9 }));
store.dispatch(addNewWinner({ id: 7, wins: 1, time: 0.9 }));
store.dispatch(addNewWinner({ id: 4, wins: 11, time: 0.9 }));
store.dispatch(addNewWinner({ id: 9, wins: 11, time: 0.9 }));
store.dispatch(addNewWinner({ id: 12, wins: 11, time: 0.9 }));
store.dispatch(addNewWinner({ id: 13, wins: 15, time: 0.9 }));
store.dispatch(addNewWinner({ id: 17, wins: 15, time: 0.9 }));
store.dispatch(addNewWinner({ id: 10, wins: 15, time: 0.9 }));
store.dispatch(addNewWinner({ id: 11, wins: 15, time: 0.9 }));
store.dispatch(addNewWinner({ id: 8, wins: 15, time: 0.9 }));
export default store;
