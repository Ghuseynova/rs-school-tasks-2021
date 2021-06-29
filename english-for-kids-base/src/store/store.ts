import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers';

// import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

// sagaMiddleware.run(rootSaga);

export default store;
